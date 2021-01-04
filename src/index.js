import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mainReduser from './reducers/mainReduser';
import sagas from './sagas';
import { HashRouter as Router } from "react-router-dom";
import './reset-styles.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReduser,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagas.forEach((saga) => sagaMiddleware.run(saga));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);
