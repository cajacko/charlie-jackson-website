// @flow

/**
 * When we are not in development, catch every console statement and send it
 * to our log server. Making sure to still show the log in the console.
 */

import Raven from 'raven-js';
import environment from '../constants/environment';

if (environment !== 'development') {
  // The properties are the console functions, the values are the log level to
  // send to the server
  const logMap = {
    log: 'info',
    info: 'info',
    warn: 'warning',
    error: 'error',
  };

  // Store a ref to the original console object
  const actualConsole = window.console;
  // Set the console object as blank object, we'll add the functionality back in
  window.console = {};

  // Add back all the props/values to the console object, but for the functions,
  // send the log to our server as well.
  Object.keys(actualConsole).forEach((m) => {
    // Only need to wrap the functions
    if (typeof actualConsole[m] === 'function') {
      // Set the wrapper, which pings our log server
      window.console[m] = (...args) => {
        // Only ping our log server for the functions we've mapped out a log
        // level for
        if (logMap[m]) {
          Raven.captureMessage(typeof args[0] === 'string' ? args[0] : m, {
            extra: args,
            level: logMap[m],
          });
        }

        // Perform the original console function, so it appears in the console
        actualConsole[m](...args);
      };
    } else {
      // Not concerned with this, so put it back as usual
      window.console[m] = actualConsole[m];
    }
  });
}
