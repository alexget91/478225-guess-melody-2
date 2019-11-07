import React from "react";
import PropTypes from "prop-types";
import {artistQuestion} from "../../common/global-prop-types";
import AudioPlayer from "../audio-player/audio-player";

const IS_PLAYING_DEFAULT = false;

class ArtistQuestionScreen extends React.PureComponent {
  get defaultState() {
    return {
      isPlaying: IS_PLAYING_DEFAULT
    };
  }

  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  render() {
    const {question, screenIndex} = this.props;
    const {isPlaying} = this.state;
    const {
      song,
      answers,
    } = question;

    return (
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

        <form className="game__artist">
          {answers.map((it, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="artist">
                <input className="artist__input visually-hidden js-answer-input" type="radio" name="answer" value={`answer-${i}`}
                  id={`answer-${i}`} onChange={() => {
                    this.props.onAnswer(answers[i].artist);
                    this.setState(this.defaultState);
                  }}/>
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
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.exact(artistQuestion).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
