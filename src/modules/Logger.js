// @flow

// import Raven from 'raven-js';
import environment from '../constants/environment';

// if (environment !== 'development') {
const logMap = {
  log: 'info',
  info: 'info',
  warn: 'warning',
  error: 'error',
};

const actualConsole = window.console;
const c = (window.console = {});
const log = {};

Object.keys(actualConsole).forEach((m) => {
  if (typeof console[m] === 'object') {
    c[m] = console[m];
  } else if (typeof actualConsole[m] === 'function') {
    c[m] = function () {
      const args = Array.prototype.slice.call(arguments);

      if (logMap[this]) {
        // Raven.captureMessage(typeof args[0] === 'string' ? args[0] : this, {
        //   extra: args,
        //   level: logMap[this],
        // });
        log[this] = log[this] || [];
        log[this].push([...arguments]);
      }

      actualConsole[this](...args);
    }.bind(m);
  }
});

console.log('hey ther', { boo: 'yay' });
console.log('boom', { greaa: 'poop' });

actualConsole.log('log:', log);
// }
