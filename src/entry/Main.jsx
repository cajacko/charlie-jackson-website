/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Routes from 'containers/Routes/Routes';
import configureStore from 'store/configureStore';

const preloadedState = {};
const store = configureStore(preloadedState);

const Main = () => (
  <Provider store={store}>
    <Router>
      <Route path="*" component={Routes} />
    </Router>
  </Provider>
);

export default Main;
