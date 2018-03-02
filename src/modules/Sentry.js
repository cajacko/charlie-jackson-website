// @flow

import Raven from 'raven-js';
import { version } from '../../package.json';
import env from '../constants/env';
import environment from '../constants/environment';

console.warn(env);

Raven.config(env.SENTRY_URL, {
  release: version,
  environment,
  serverName: window.location.hostname,
  debug: environment === 'production',
}).install();
