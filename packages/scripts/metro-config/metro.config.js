'use strict'

const path = require('path')

const { getDefaultConfig } = require('@expo/metro-config')

/**
 * Learn more about customizing metro
 * @see https://docs.expo.dev/guides/customizing-metro/
 * @param {Object} options - The options.
 * @param {string} options.projectRoot - The project root.
 * @param {string} options.workspaceRoot - The workspace root.
 */
function makeConfig({ projectRoot, workspaceRoot }) {
  const config = getDefaultConfig(projectRoot)

  /**
   * Monorepo support
   * @see https://docs.expo.dev/guides/monorepos/#modify-the-metro-config
   */
  // 1. Watch all files within the monorepo
  config.watchFolders = [workspaceRoot]
  // 2. Let Metro know where to resolve packages and in what order
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ]
  // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
  config.resolver.disableHierarchicalLookup = true

  /**
   * SVG support
   * @see https://github.com/kristerkari/react-native-svg-transformer
   */
  config.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer',
  )
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg']
  config.resolver.assetExts = config.resolver.assetExts.filter(
    ext => ext !== 'svg',
  )

  /**
   * Remove all console logs in production for performance.
   * @see https://reactnative.dev/docs/performance#using-consolelog-statements
   */
  config.transformer.minifierConfig.compress.drop_console = true

  return config
}

module.exports = {
  makeConfig,
}
