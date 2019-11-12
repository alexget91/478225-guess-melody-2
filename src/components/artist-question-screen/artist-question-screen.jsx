import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {artistQuestion} from "../../common/global-prop-types";

class ArtistQuestionScreen extends PureComponent {
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

  _answerSubmitHandler(evt) {
    const {question, onAnswer, onScreenChange} = this.props;

    onAnswer(question.answers[evt.currentTarget.dataset.index].artist);
    onScreenChange();
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.exact(artistQuestion).isRequired,
  screenIndex: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onScreenChange: PropTypes.func,
};

export default ArtistQuestionScreen;
