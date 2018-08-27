import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './js/reducers';
import dataService from './js/middlewares/dataService';

const store = createStore(reducers, {}, compose(applyMiddleware(dataService)));

const history = syncHistoryWithStore(browserHistory, store);

import App from "./js/app";
import Me from "./js/components/me";
import You from "./js/components/you";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/me" component={Me} />
      <Route path="/you" component={You} />
    </Router>
  </Provider>
  , document.getElementById('root')
);
