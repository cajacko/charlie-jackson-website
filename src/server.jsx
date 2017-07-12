import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter as Router } from 'react-router-dom';
import App from 'containers/App/App';

const Server = ({ location, context, state }) => (
  <Router location={location} context={context}>
    <App state={state} />
  </Router>
);

Server.propTypes = {
  location: PropTypes.string.isRequired,
  // eslint-disable-next-line
  context: PropTypes.object.isRequired,
  // eslint-disable-next-line
  state: PropTypes.object.isRequired,
};

export default Server;
