import * as React from "react";
import {ArtistQuestion, Song} from "../../common/types";

interface Props {
  question: ArtistQuestion,
  screenIndex: number,
  renderPlayer: (song: Song, id: number) => React.ReactElement,
  onAnswer: (userAnswer: string) => void,
  onScreenChange?: () => void,
}

class ArtistQuestionScreen extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._answerSubmitHandler = this._answerSubmitHandler.bind(this);
  }

  render() {
    const {question, screenIndex, renderPlayer} = this.props;
    const {
      song,
      answers,
    } = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track" key={`song-${screenIndex}`}>
            {renderPlayer(song, 0)}
          </div>
        </div>

        <form className="game__artist">
          {answers.map((it, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="artist">
                <input className="artist__input visually-hidden js-answer-input" type="radio" name="answer" value={`answer-${i}`}
                  id={`answer-${i}`} data-index={i} onChange={this._answerSubmitHandler}/>
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={it.picture} alt={it.artist} />
                  {it.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    );
  }

  private _answerSubmitHandler(evt) {
    const {question, onAnswer, onScreenChange} = this.props;

    onAnswer(question.answers[evt.currentTarget.dataset.index].artist);
    onScreenChange();
  }
}

export default ArtistQuestionScreen;
