// @flow

import Raven from 'raven-js';
import isDev from '../constants/isDev';
import { version } from '../../package.json';
import env from '../constants/env';

Raven.config(env.SENTRY_URL, {
  release: version,
  environment: isDev ? 'development' : 'production',
  serverName: window.location.hostname,
  debug: isDev,
}).install();
