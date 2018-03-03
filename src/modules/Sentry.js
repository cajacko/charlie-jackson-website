// @flow

import Raven from 'raven-js';
import { version } from '../../package.json';
import env from '../constants/env';
import environment from '../constants/environment';

Raven.config(env.SENTRY_URL, {
  release: version,
  environment,
  serverName: window && window.location && window.location.hostname,
  debug: environment === 'production',
}).install();
