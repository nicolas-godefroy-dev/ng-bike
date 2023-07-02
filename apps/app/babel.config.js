const path = require('path');

const config = require('@ng-bike/babel-config-react-native');

/**
 * Custom config for expo router
 * @see https://github.com/expo/router/issues/41
 **/
process.env.EXPO_ROUTER_APP_ROOT = path.resolve(__dirname, '/src/routes');

module.exports = function (api) {
  api.cache(true);

  config.plugins.push([
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '@': './src',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  ]);

  return config;
};
