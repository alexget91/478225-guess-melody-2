import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";
import questions from "./mocks/questions";
import settings from "./mocks/settings";

const init = (gameQuestions, {errorCount, gameTime}) => {
  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions, settings);
