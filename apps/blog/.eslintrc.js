const config = require('@ng-bike/eslint-config-next');

module.exports = {
  ...config,
  parserOptions: { tsconfigRootDir: __dirname },
};
