import React from "react";
import PropTypes from "prop-types";
import {artistQuestion} from "../../common/global-prop-types";
import AudioPlayer from "../audio-player/audio-player";

const IS_PLAYING_DEFAULT = false;

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: IS_PLAYING_DEFAULT
    };

    this._answerSubmitHandler = this._answerSubmitHandler.bind(this);
  }

  render() {
    const {question, screenIndex} = this.props;
    const {isPlaying} = this.state;
    const {
      song,
      answers,
    } = question;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <div className="timer__value">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track" key={`song-${screenIndex}`}>
              <AudioPlayer
                src={song.src}
                isPlaying={isPlaying}
                onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
              />
            </div>
          </div>

          <form className="game__artist js-answer-form" onChange={this._answerSubmitHandler}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}/>
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img className="artist__picture" src={it.picture} alt={it.artist} />
                    {it.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    );
  }

  _answerSubmitHandler(evt) {
    this.setState({
      isPlaying: IS_PLAYING_DEFAULT
    });

    this.props.onAnswer(evt.target.value);
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.exact(artistQuestion).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
