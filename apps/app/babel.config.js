const config = require('@ng-bike/expo-config/babel');

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
