'use strict'

/**
 * Learn more about customizing jest
 * @see https://jestjs.io/docs/configuration
 * @param {Object} customConfig -  Jest custom config.
 */
function makeConfig(customConfig = {}) {
  const config = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/coverage/**',
      '!**/node_modules/**',
    ],
    ...customConfig
  }

  return config
}

module.exports = {
  makeConfig,
}
