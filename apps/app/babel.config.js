const path = require('path');

const config = require('@ng-bike/babel-config-react-native');

process.env.EXPO_ROUTER_APP_ROOT = path.resolve(__dirname, '/src/routes');

module.exports = function (api) {
  api.cache(true);

  config.plugins.push([
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '@components': './src/components',
        '@screens': './src/screens',
        '@routes': './src/routes',
        '@constants': './src/constants',
        '@assets': './src/assets',
        '@hooks': './src/hooks',
        '@libs': './src/libs',
        '@services': './src/services',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  ]);

  return config;
};
