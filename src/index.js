import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app";
import settings from "./mocks/settings";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";
import configureAPI from "./api";
import {compose} from "recompose";
import thunk from "redux-thunk";
import Operation from "./reducer/data/operation/operation";

const init = ({errorCount, gameTime}) => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadQuestions());

  ReactDOM.render(
      <Provider store={store}>
        <App
          maxMistakes={errorCount}
          gameTime={gameTime}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(settings);
