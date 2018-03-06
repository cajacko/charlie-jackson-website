// @flow

/**
 * Export the envrioment we are in, one of:
 * - production
 * - development
 * - staging
 */

import env from './env';

/**
 * Get the envrioment we are in, one of:
 * - production
 * - development
 * - staging
 *
 * @return {String} Environment we are in
 */
function getEnvironment(): string {
  let environment;

  if (
    env.STAGING_HOSTNAME &&
    window.location.hostname.includes(env.STAGING_HOSTNAME)
  ) {
    environment = 'staging';
  } else if (env.NODE_ENV === 'development') {
    environment = 'development';
  } else {
    environment = 'production';
  }

  return environment;
}

export default getEnvironment();
