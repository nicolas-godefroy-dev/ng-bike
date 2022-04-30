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
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
      "inline-dotenv",
    ],
  }
}
