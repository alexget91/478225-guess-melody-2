import React, {PureComponent} from 'react';
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio";

const DEFAULT_ACTIVE_PLAYER = -1;

const AudioPlayerWrapped = withAudio(AudioPlayer);

const withActivePlayer = (Component) => class WithActivePlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: DEFAULT_ACTIVE_PLAYER,
    };

    this.playButtonClickHandlers = {};
  }

  getOnPlayButtonClick(id) {
    if (!this.playButtonClickHandlers.hasOwnProperty(id)) {
      // Если обработчика нет, то создаем его и кешируем. Если он уже создан, то берем из кеша.
      this.playButtonClickHandlers[id] = () => {
        const {activePlayer} = this.state;
        this.setState({
          activePlayer: activePlayer === id ? DEFAULT_ACTIVE_PLAYER : id
        });
      };
    }

    return this.playButtonClickHandlers[id];
  }


  render() {
    const {activePlayer} = this.state;

    return <Component
      {...this.props}
      renderPlayer={(it, i) => <AudioPlayerWrapped
        src={it.src}
        isPlaying={i === activePlayer}
        onPlayButtonClick={this.getOnPlayButtonClick(i)}
      />}
      onScreenChange={() => this.setState({activePlayer: DEFAULT_ACTIVE_PLAYER})}
    />;
  }
};

export default withActivePlayer;
