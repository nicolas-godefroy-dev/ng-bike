const path = require("path")
process.env.EXPO_ROUTER_APP_ROOT = path.resolve(__dirname, "/src/routes")

module.exports = function (api) {
  api.cache(true)

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@constants": "./src/constants",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@libs": "./src/libs",
            "@theme": "./src/theme",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
      "inline-dotenv",
      require.resolve("expo-router/babel"),
    ],
  }
}
