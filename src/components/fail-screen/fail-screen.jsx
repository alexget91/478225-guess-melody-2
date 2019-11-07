import React from "react";
import PropTypes from "prop-types";

const TEXT = {
  time: {
    title: `Увы и ах!`,
    text: `Время вышло! Вы не успели отгадать все мелодии`,
  },
  mistakes: {
    title: `Какая жалость!`,
    text: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  },
};

const FailScreen = (props) => {
  const {failType} = props;

  return <section className="result">
    <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <h2 className="result__title">{TEXT[failType].title}</h2>
    <p className="result__total result__total--fail">{TEXT[failType].text}</p>
    <button className="replay" type="button">Попробовать ещё раз</button>
  </section>;
};

FailScreen.propTypes = {
  failType: PropTypes.oneOf([`time`, `mistakes`])
};

export default FailScreen;
