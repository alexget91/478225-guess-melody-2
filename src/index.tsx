import * as ReactDOM from "react-dom";
import * as React from "react";
import App from "./components/app/app";
import settings from "./common/settings";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";
import configureAPI from "./api";
import {compose} from "recompose";
import thunk from "redux-thunk";
import Operation from "./reducer/data/operation/operation";
import UserOperation from "./reducer/user/operation/operation";
import {Router} from "react-router-dom";
import Path from "./common/path";
import history from "./history";
import NameSpace from "./reducer/name-spaces";

const init = ({errorCount, gameTime}) => {
  const api = configureAPI(() => history.push(Path.AUTH));
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );

  store.dispatch(Operation.loadQuestions());
  if (store.getState()[NameSpace.USER].isAuthorizationRequired) {
    store.dispatch(UserOperation.checkAuth());
  }

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App
          maxMistakes={errorCount}
          gameTime={gameTime}
        />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
  );
};

init(settings);
