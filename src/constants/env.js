// @flow

const env: { SENTRY_URL?: ?string, NODE_ENV?: ?string } =
  process && process.env && typeof process.env === 'object' ? process.env : {};

export default env;
