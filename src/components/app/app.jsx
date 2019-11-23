import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {artistQuestion, genreQuestion} from "../../common/global-prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/game/game";
import GameScreen from "../game-screen/game-screen";
import FailScreen from "../fail-screen/fail-screen";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import {ScreenSteps} from "../../common/constants";
import NameSpace from "../../reducer/name-spaces";

const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

const App = (props) => {
  const {step} = props;

  switch (step) {
    case ScreenSteps.START:
      const {
        gameTime,
        maxMistakes,
        onWelcomeScreenClick
      } = props;

      return <WelcomeScreen
        time={gameTime / 60}
        errorCount={maxMistakes}
        onStartButtonClick={onWelcomeScreenClick}
      />;

    case ScreenSteps.FAIL_TIME:
      return <FailScreen failType={`time`}/>;

    case ScreenSteps.FAIL_MISTAKES:
      return <FailScreen failType={`mistakes`}/>;
  }

  const {questions, mistakes, maxMistakes, onUserAnswer, gameTime, onTimeChange, onTimeIsUp} = props;
  const currentQuestion = questions[step];

  switch (currentQuestion.type) {
    case `genre`: return <GameScreen type={currentQuestion.type} mistakes={mistakes} time={gameTime}
      onTimeChange={onTimeChange} onTimeIsUp={onTimeIsUp}>

      <GenreQuestionScreenWrapped
        screenIndex={step}
        question={currentQuestion}
        answersLength={currentQuestion.answers.length}
        onAnswer={(userAnswer) => onUserAnswer(userAnswer, currentQuestion, mistakes, maxMistakes)}
      />
    </GameScreen>;

    case `artist`: return <GameScreen type={currentQuestion.type} mistakes={mistakes} time={gameTime}
      onTimeChange={onTimeChange} onTimeIsUp={onTimeIsUp}>

      <ArtistQuestionScreenWrapped
        screenIndex={step}
        question={currentQuestion}
        onAnswer={(userAnswer) => onUserAnswer(userAnswer, currentQuestion, mistakes, maxMistakes)}
      />
    </GameScreen>;
  }

  return null;
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.exact(genreQuestion),
    PropTypes.exact(artistQuestion),
  ])).isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onTimeChange: PropTypes.func.isRequired,
  onTimeIsUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: state[NameSpace.DATA].questions,
  step: state[NameSpace.GAME].step,
  mistakes: state[NameSpace.GAME].mistakes,
  gameTime: state[NameSpace.GAME].time,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(userAnswer, question, mistakes, maxMistakes));
  },

  onTimeChange: () => dispatch(ActionCreator.decrementTime()),
  onTimeIsUp: () => dispatch(ActionCreator.setStep(ScreenSteps.FAIL_TIME)),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
