import React from "react";
import PropTypes from "prop-types";
import {FailType} from "../../common/constants";
import ReplayButton from "../replay-button/replay-button";

const TEXT = {
  [FailType.TIME]: {
    title: `Увы и ах!`,
    text: `Время вышло! Вы не успели отгадать все мелодии`,
  },
  [FailType.MISTAKES]: {
    title: `Какая жалость!`,
    text: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  },
};

const FailScreen = (props) => {
  const {failType, onReplayClick} = props;

  return <section className="result">
    <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <h2 className="result__title">{TEXT[failType].title}</h2>
    <p className="result__total result__total--fail">{TEXT[failType].text}</p>
    <ReplayButton text={`Попробовать ещё раз`} onClick={onReplayClick}/>
  </section>;
};

FailScreen.propTypes = {
  failType: PropTypes.oneOf(Object.keys(FailType)),
  onReplayClick: PropTypes.func.isRequired,
};

export default FailScreen;
