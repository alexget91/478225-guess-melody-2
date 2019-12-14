import * as React from "react";

interface Props {
  isLoading: boolean,
  isPlaying: boolean,
  src: string,
  renderAudio: () => React.ReactElement,
  onPlayButtonClick: () => void,
}

const AudioPlayer = (props: Props) => {
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

export default AudioPlayer;
