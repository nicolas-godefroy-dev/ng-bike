'use strict';

module.exports = {
  extends: [require.resolve('@ng-bike/expo-config/eslint')],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
