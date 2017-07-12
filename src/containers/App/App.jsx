import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from 'containers/Routes/Routes';
import configureStore from 'store/configureStore';

const App = ({ state }) => {
  let preloadedState = state;

  if (typeof window !== 'undefined' && window.REDUX_PRELOADED_STATE) {
    preloadedState = window.REDUX_PRELOADED_STATE;
    delete window.REDUX_PRELOADED_STATE;
  }

  const store = configureStore(preloadedState);

  return (
    <Provider store={store}>
      <Route path="*" component={Routes} />
    </Provider>
  );
};

App.propTypes = {
  // eslint-disable-next-line
  state: PropTypes.object,
};

App.defaultProps = {
  state: {},
};

export default App;
