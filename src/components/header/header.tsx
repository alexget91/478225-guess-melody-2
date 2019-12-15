import * as React from "react";
import Mistakes from "../mistakes/mistakes";
import Timer from "../timer/timer";

interface Props {
  mistakes?: number,
  time: number,
  onTimeChange: () => void,
}

const Header = (props: Props) => {
  const {mistakes, time, onTimeChange} = props;

  return <header className="game__header">
    <a className="game__back" href="#">
      <span className="visually-hidden">Сыграть ещё раз</span>
      <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
    </a>

    <Timer time={time} onTimeChange={onTimeChange}/>
    <Mistakes count={mistakes}/>
  </header>;
};

export default Header;
