import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";
import questions from "./mocks/questions";
import settings from "./mocks/settings";

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
