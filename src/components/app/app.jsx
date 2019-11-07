import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {artistQuestion, genreQuestion} from "../../common/global-prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import GameScreen from "../game-screen/game-screen";

class App extends PureComponent {
  static getScreen(props) {
    const {step} = props;

    if (step === -1) {
      const {
        gameTime,
        maxMistakes,
        onWelcomeScreenClick
      } = props;

      return <WelcomeScreen
        time={gameTime}
        errorCount={maxMistakes}
        onStartButtonClick={onWelcomeScreenClick}
      />;
    }

    const {questions, mistakes, maxMistakes, onUserAnswer} = props;
    const currentQuestion = questions[step];

    switch (currentQuestion.type) {
      case `genre`: return <GameScreen mistakes={mistakes}>
        <GenreQuestionScreen
          screenIndex={step}
          question={currentQuestion}
          onAnswer={(userAnswer) => onUserAnswer(userAnswer, currentQuestion, mistakes, maxMistakes)}
        />
      </GameScreen>;

      case `artist`: return <GameScreen mistakes={mistakes}>
        <ArtistQuestionScreen
          screenIndex={step}
          question={currentQuestion}
          onAnswer={(userAnswer) => onUserAnswer(userAnswer, currentQuestion, mistakes, maxMistakes)}
        />
      </GameScreen>;
    }

    return null;
  }

  render() {
    return App.getScreen(this.props);
  }
}

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
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(userAnswer, question, mistakes, maxMistakes));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
