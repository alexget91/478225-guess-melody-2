import React from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  const {isLoading, isPlaying, renderAudio, onPlayButtonClick} = props;

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`} js-track-button`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        {renderAudio()}
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  renderAudio: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
