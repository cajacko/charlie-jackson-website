// @flow

/**
 * Consistent export of the environmental variables as an object.
 */

const env: {
  SENTRY_URL?: ?string,
  NODE_ENV?: ?string,
  MAILCHIMP_SIGNUP_URL?: ?string,
} = {};

try {
  Object.keys(process.env).forEach((key) => {
    env[key.replace('REACT_APP_', '')] = process.env[key];
  });
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Could not load process.env');

  // eslint-disable-next-line no-console
  console.error(e);
}

export default env;
