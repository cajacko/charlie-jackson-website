import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from 'containers/Routes/Routes';
import configureStore from 'store/configureStore';

const App = ({ state }) => {
  const store = configureStore(state);

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
