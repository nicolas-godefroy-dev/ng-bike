const config = require('@ng-bike/next-config/eslint');

module.exports = {
  ...config,
  root: true,
  parserOptions: { tsconfigRootDir: __dirname },
};