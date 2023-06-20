const config = require('@ng-bike/babel-config-react-native');

module.exports = function (api) {
  api.cache(true);

  return config;
};
