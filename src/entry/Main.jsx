/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import App from 'containers/App/App';
import configureStore from 'store/configureStore';

const preloadedState = {};
const store = configureStore(preloadedState);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;
