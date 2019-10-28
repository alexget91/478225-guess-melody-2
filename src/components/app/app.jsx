import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";

class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          ...prevState,
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.exact({
      type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
      genre: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.exact({
        genre: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })).isRequired
    }),
    PropTypes.exact({
      type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
      song: PropTypes.exact({
        artist: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }).isRequired,
      answers: PropTypes.arrayOf(PropTypes.exact({
        artist: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }))
    }),
  ])).isRequired,
};

export default App;
