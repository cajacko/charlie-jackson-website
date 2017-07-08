const path = require('path');

module.exports = (isProduction) => {
  const output = {
    // Out put with cache buster names in production
    filename: (() => {
      if (isProduction) {
        return '[chunkhash].[name].js';
      }

      // No hash for dev as it adds to compliation time
      return '[name].js';
    })(),

    // Change build path for production and dev, makes it more obvious when
    // production build needs to happen
    path: (() => {
      if (isProduction) {
        return path.resolve(__dirname, '../dist/assets/prod');
      }

      return path.resolve(__dirname, '../dist/assets/dev');
    })(),

    // Set public path for webpack hot reload
    publicPath: `${process.env.WEBPACK_DEV_SERVER_PROTOCOL}://${process.env.WEBPACK_DEV_SERVER_HOST}:${process.env.WEBPACK_DEV_SERVER_PORT}/`,
  };

  return output;
};
