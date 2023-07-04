'use strict';

const path = require('path');

const { makeConfig } = require('@ng-bike/expo-config/metro');

const config = makeConfig({
  projectRoot: __dirname,
  workspaceRoot: path.resolve(__dirname, '../..'),
});

module.exports = config;
