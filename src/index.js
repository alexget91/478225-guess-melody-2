import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";
import questions from "./mocks/questions";
import settings from "./mocks/settings";
import {createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";

const init = (gameQuestions, {errorCount, gameTime}) => {
  ReactDOM.render(
      <Provider store={createStore(
          reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )}>
        <App
          maxMistakes={errorCount}
          gameTime={gameTime}
          questions={gameQuestions}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions, settings);
