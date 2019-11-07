import React from "react";
import PropTypes from "prop-types";
import {genreQuestion} from "../../common/global-prop-types";
import AudioPlayer from "../audio-player/audio-player";

const DEFAULT_ACTIVE_PLAYER = -1;

class GenreQuestionScreen extends React.PureComponent {
  get defaultState() {
    return {
      activePlayer: DEFAULT_ACTIVE_PLAYER,
      userAnswer: new Array(this.props.question.answers.length).fill(false)
    };
  }

  constructor(props) {
    super(props);

    this.state = this.defaultState;
    this._answerSubmitHandler = this._answerSubmitHandler.bind(this);
  }

  render() {
    const {question, screenIndex} = this.props;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks js-answer-form" onSubmit={this._answerSubmitHandler}>
          {answers.map((it, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="track">
                <AudioPlayer
                  src={it.src}
                  isPlaying={i === this.state.activePlayer}
                  onPlayButtonClick={() => this.setState({
                    activePlayer: this.state.activePlayer === i ? -1 : i
                  })}
                />
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer"
                    value={`answer-${i}`} id={`answer-${i}`}
                    onChange={() => {
                      const userAnswer = [...this.state.userAnswer];
                      userAnswer[i] = !userAnswer[i];
                      this.setState({userAnswer});
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }

  _answerSubmitHandler(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.state.userAnswer);
    this.setState(this.defaultState);
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact(genreQuestion).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
