import * as React from "react";

interface Props {
  time: number,
  onTimeChange: () => void,
}

class Timer extends React.PureComponent<Props, null> {
  private timerInterval: number;

  static getForMattedNumber(number) {
    return number < 10 ? `0` + number : number;
  }

  static getForMattedTime(time) {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    return {
      min: Timer.getForMattedNumber(min),
      sec: Timer.getForMattedNumber(sec)
    };
  }

  constructor(props) {
    super(props);

    this.timerInterval = null;
    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.timerInterval = window.setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    const {time} = this.props;
    const formattedTime = Timer.getForMattedTime(time);

    return <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370"
          style={{filter: `url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center`}}/>
      </svg>

      <div className="timer__value">
        <span className="timer__mins">{formattedTime.min}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{formattedTime.sec}</span>
      </div>
    </React.Fragment>;
  }

  private _tick() {
    const {time, onTimeChange} = this.props;

    if (time <= 1) {
      clearInterval(this.timerInterval);
    }

    onTimeChange();
  }
}

export default Timer;
