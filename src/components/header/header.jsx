import React from "react";
import Mistakes from "../mistakes/mistakes";
import PropTypes from "prop-types";
import Timer from "../timer/timer";

const Header = (props) => {
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

Header.propTypes = {
  mistakes: PropTypes.number,
  time: PropTypes.number.isRequired,
  onTimeChange: PropTypes.func.isRequired,
};

export default Header;
