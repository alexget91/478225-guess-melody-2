import * as React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/game/reducer/reducer";
import GameScreen from "../game-screen/game-screen";
import FailScreen from "../fail-screen/fail-screen";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import {FailType, QuestionType, ScreenStep} from "../../common/constants";
import {getMistakes, getStep, getTime} from "../../reducer/game/selectors/selectors";
import {getQuestions} from "../../reducer/data/selectors/selectors";
import AuthorizationScreen from "../authorization-screen/authorization-screen";
import {getAuthorizationRequired, getUser} from "../../reducer/user/selectors/selectors";
import UserOperation from "../../reducer/user/operation/operation";
import {Switch, Route, Redirect} from "react-router-dom";
import Path from "../../common/path";
import WinScreen from "../win-screen/win-screen";
import {User, ArtistQuestion, GenreQuestion} from "../../common/types";

const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

interface Props {
  mistakes?: number,
  maxMistakes?: number,
  gameTime: number,
  questions: Array<ArtistQuestion | GenreQuestion>,
  step: number,
  user?: User,
  isAuthorizationRequired?: boolean,
  onUserAnswer?: (answer: string | Array<boolean>, question: ArtistQuestion | GenreQuestion) => void,
  onWelcomeScreenClick?: () => void,
  onTimeChange?: () => void,
  onSignIn?: () => void,
  onReplayClick?: () => void,
}

const getScreen = (props: Props) => {
  const {questions, step, mistakes, maxMistakes, gameTime} = props;

  if (step >= questions.length) {
    return <Redirect to={Path.WIN}/>;
  }

  if (gameTime <= 0) {
    return <Redirect to={Path.LOSE_TIME}/>;
  }

  if (mistakes >= maxMistakes) {
    return <Redirect to={Path.LOSE_MISTAKES}/>;
  }

  if (step === ScreenStep.START) {
    const {onWelcomeScreenClick} = props;

    return <WelcomeScreen
      time={gameTime / 60}
      errorCount={maxMistakes}
      onStartButtonClick={onWelcomeScreenClick}
    />;
  }

  const {onUserAnswer, onTimeChange} = props;
  const currentQuestion = questions[step];

  switch (currentQuestion.type) {
    case QuestionType.GENRE: return <GameScreen type={currentQuestion.type} mistakes={mistakes} time={gameTime}
      onTimeChange={onTimeChange}>

      <GenreQuestionScreenWrapped
        screenIndex={step}
        question={currentQuestion}
        answersLength={currentQuestion.answers.length}
        onAnswer={(userAnswer) => onUserAnswer(userAnswer, currentQuestion)}
      />
    </GameScreen>;

    case QuestionType.ARTIST: return <GameScreen type={currentQuestion.type} mistakes={mistakes} time={gameTime}
      onTimeChange={onTimeChange}>

      <ArtistQuestionScreenWrapped
        screenIndex={step}
        question={currentQuestion}
        onAnswer={(userAnswer) => onUserAnswer(userAnswer, currentQuestion)}
      />
    </GameScreen>;
  }

  return null;
};

const App = (props: Props) => {
  const {user, onSignIn, onReplayClick} = props;

  return <Switch>
    <Route path={Path.INDEX} exact render={() => getScreen(props)}/>
    <Route path={Path.AUTH} exact render={() => <AuthorizationScreen
      onAuthFormSubmit={onSignIn}
    />}/>
    <Route path={Path.WIN} exact render={() => <WinScreen
      user={user}
      onAuthFormSubmit={onSignIn}
      onReplayClick={onReplayClick}
    />}/>
    <Route path={Path.LOSE_MISTAKES} exact render={() => {
      return <FailScreen failType={FailType.MISTAKES} onReplayClick={onReplayClick}/>;
    }}/>
    <Route path={Path.LOSE_TIME} exact render={() => {
      return <FailScreen failType={FailType.TIME} onReplayClick={onReplayClick}/>;
    }}/>
  </Switch>;
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: getQuestions(state),
  step: getStep(state),
  mistakes: getMistakes(state),
  gameTime: getTime(state),
  isAuthorizationRequired: getAuthorizationRequired(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (userAnswer, question) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(userAnswer, question));
  },
  onTimeChange: () => dispatch(ActionCreator.decrementTime()),
  onSignIn: (email, password) => dispatch(UserOperation.signIn(email, password)),
  onReplayClick: () => dispatch(ActionCreator.reset()),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
