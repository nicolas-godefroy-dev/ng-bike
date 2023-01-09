import "dotenv/config"

export default ({ config }) => {
  config.plugins = [
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
  ]

  // Pass env variables to expo-constants
  config.extra = {
    ...config.extra,
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
  }

  return config
}
