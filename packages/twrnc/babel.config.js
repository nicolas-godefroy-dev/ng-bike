const config = require('@ng-bike/expo-config/babel');

module.exports = function (api) {
  api.cache(true);

  return config;
};
