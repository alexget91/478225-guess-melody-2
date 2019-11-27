import Header from "../header/header";
import React from "react";
import PropTypes from "prop-types";

const GameScreen = (props) => {
  const {children, type, mistakes, time, onTimeChange} = props;

  return <section className={`game game--${type}`}>
    <Header mistakes={mistakes} time={time} onTimeChange={onTimeChange}/>
    {children}
  </section>;
};

GameScreen.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  mistakes: PropTypes.number,
  time: PropTypes.number.isRequired,
  onTimeChange: PropTypes.func.isRequired,
};

export default GameScreen;
