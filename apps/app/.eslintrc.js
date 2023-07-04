const config = require('@ng-bike/expo-config/eslint');

module.exports = {
  ...config,
  root: true,
  parserOptions: { tsconfigRootDir: __dirname },
};
