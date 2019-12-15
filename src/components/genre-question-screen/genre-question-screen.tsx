import * as React from "react";
import {GenreQuestion} from "../../common/types";

interface Props {
  question: GenreQuestion,
  screenIndex: number,
  userAnswer: Array<boolean>,
  renderPlayer: ({src: string}, id: number) => React.ReactElement,
  onAnswerChange: () => void,
  onAnswerSubmit: () => void,
  onScreenChange?: () => void,
}

class GenreQuestionScreen extends React.PureComponent<Props, null> {
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

  private _answerSubmitHandler(evt) {
    evt.preventDefault();

    this.props.onAnswerSubmit();
    this.props.onScreenChange();
  }
}

export default GenreQuestionScreen;
