import { Platform } from "react-native"
import type { MapStyleElement } from "react-native-maps"

import map from "@theme/map"

import useThemeSelect from "./useThemeSelect"

/**
 * Get the themed map style
 * @example
 * const mapStyle = useMapStyle()
 */
const useMapStyle = (): MapStyleElement[] | undefined => {
  const style = useThemeSelect<MapStyleElement[] | undefined>({
    light: {
      mapStyle: Platform.select({
        ios: map.light.applePlans,
        android: map.light.googleMap,
      }),
    },
    dark: {
      mapStyle: Platform.select({
        ios: map.dark.applePlans,
        android: map.dark.googleMap,
      }),
    },
  })

  return style.mapStyle
}

export default useMapStyle
