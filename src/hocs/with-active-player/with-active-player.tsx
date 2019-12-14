import * as React from "react";
import {PureComponent} from "react";
import {Subtract} from "utility-types";
import AudioPlayer from "../../components/audio-player/audio-player";
import withAudio from "../with-audio/with-audio";

const DEFAULT_ACTIVE_PLAYER = -1;

interface State {
  activePlayer: number;
}

interface InjectedProps {
  renderPlayer: (song: {src: string}, id: number) => typeof AudioPlayerWrapped;
}

const AudioPlayerWrapped = withAudio(AudioPlayer);


const withActivePlayer = (Component) => {
  // Получаем пропсы переданного компонента
  type P = React.ComponentProps<typeof Component>;

  // Вычисляем реальные пропсы, которые нужно передать снаружи в обернутый компонент.
  // P - пропсы компонента, InjectedProps - добавляемые хоком пропсы.
  // T - пропсы, которые нужно передать в обернутый хоком компонент.
  // Условно: T = P - InjectedProps
  // Например: P = {foo: string, bar: string}, InjectedProps = {bar: string}
  // Тогда: T = {foo: string}
  type T = Subtract<P, InjectedProps>;

  class WithActivePlayer extends PureComponent<T, State> {
    private playButtonClickHandlers: {};

    constructor(props) {
      super(props);

      this.state = {
        activePlayer: DEFAULT_ACTIVE_PLAYER,
      };

      this.playButtonClickHandlers = {};
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

    private getOnPlayButtonClick(id) {
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
  }

  return WithActivePlayer;
};

export default withActivePlayer;
