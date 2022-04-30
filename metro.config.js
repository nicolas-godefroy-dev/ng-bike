/**
 * Learn more about customizing metro
 * @see https://docs.expo.dev/guides/customizing-metro/
 */
"use strict"
const { getDefaultConfig } = require("@expo/metro-config")

const config = getDefaultConfig(__dirname)

/**
 * SVG support
 * @see https://github.com/kristerkari/react-native-svg-transformer
 */
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer",
)
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"]
config.resolver.assetExts = config.resolver.assetExts.filter(
  ext => ext !== "svg",
)

/**
 * Remove all console logs in production for performance.
 * @see https://reactnative.dev/docs/performance#using-consolelog-statements
 */
config.transformer.minifierConfig.compress.drop_console = true

module.exports = config
