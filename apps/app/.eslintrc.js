const config = require('@ng-bike/eslint-config-react-native');

module.exports = {
  ...config,
  parserOptions: { tsconfigRootDir: __dirname },
};
