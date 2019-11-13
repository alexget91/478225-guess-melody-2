import React from "react";
import PropTypes from "prop-types";
import {genreQuestion} from "../../common/global-prop-types";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._answerSubmitHandler = this._answerSubmitHandler.bind(this);
  }

  render() {
    const {question, screenIndex, userAnswer, renderPlayer, onAnswerChange} = this.props;
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
                {renderPlayer(it, i)}
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer"
                    value={`answer-${i}`} id={`answer-${i}`} data-index={i}
                    onChange={onAnswerChange} checked={userAnswer[i]}
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

    this.props.onAnswerSubmit();
    this.props.onScreenChange();
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact(genreQuestion).isRequired,
  screenIndex: PropTypes.number.isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  onAnswerSubmit: PropTypes.func.isRequired,
  onScreenChange: PropTypes.func,
};

export default GenreQuestionScreen;
