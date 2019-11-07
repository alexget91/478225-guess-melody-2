import Header from "../header/header";
import React from "react";
import PropTypes from "prop-types";

const GameScreen = (props) => {
  const {children, mistakes} = props;

  return <section className="game game--genre">
    <Header mistakes={mistakes}/>
    {children}
  </section>;
};

GameScreen.propTypes = {
  children: PropTypes.node,
  mistakes: PropTypes.number
};

export default GameScreen;
