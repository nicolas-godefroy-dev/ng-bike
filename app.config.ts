import "dotenv/config"
import type { ExpoConfig } from "expo/config"

const config = (): ExpoConfig => {
  const config: ExpoConfig = {
    name: "Expo Bike Sharing",
    slug: "expo-bike-sharing",
    description: "Bike sharing at Rouen",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    scheme: "bike-sharing",
    userInterfaceStyle: "automatic",
    privacy: "unlisted",
    platforms: ["ios", "android"],
    githubUrl: "https://github.com/nicolas-godefroy-dev/expo-bike-sharing",
    primaryColor: "#164734",
    splash: {
      image: "./src/assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#164734",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    extra: {},
    android: {
      jsEngine: "hermes",
    },
    ios: {
      jsEngine: "jsc",
      supportsTablet: true,
      bundleIdentifier: "com.nicolas-godefroy-dev.bike-sharing",
      config: {
        usesNonExemptEncryption: false,
      },
      infoPlist: {
        NSLocationWhenInUseUsageDescription: "Show the closest bike stations.",
      },
    },
    plugins: [
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location to show bike stations near you",
          locationAlwaysPermission:
            "Allow $(PRODUCT_NAME) to use your location to show bike stations near you",
          locationWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location to show bike stations near you",
          isIosBackgroundLocationEnabled: false,
          isAndroidBackgroundLocationEnabled: false,
        },
      ],
    ],
  }

  // Pass env variables to expo-constants
  config.extra = {
    ...config.extra,
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
  }

  return config
}

export default config
