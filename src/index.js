// @flow
/* eslint import/first: 0 */

import './modules/Sentry';
import './modules/Logger';
import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AssetPreload from './modules/AssetPreload';

// Try and render the app, if we get an error, then show the report dialog, and
// notify the log server
try {
  AssetPreload.preload();

  const root = document.getElementById('root');

  if (root === null) {
    throw new Error('#root does not exist on the page, could not load react');
  } else {
    ReactDOM.render(<App />, root);
  }
} catch (err) {
  Raven.captureException(err);
  Raven.showReportDialog();
}
