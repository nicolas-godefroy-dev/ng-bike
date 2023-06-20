'use strict'

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    'inline-dotenv',
    require.resolve('expo-router/babel'),
  ],
}
