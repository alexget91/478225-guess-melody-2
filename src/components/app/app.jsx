import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;
  const onGameStartClick = () => {};

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onGameStartClick={onGameStartClick}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
