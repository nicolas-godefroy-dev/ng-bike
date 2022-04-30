import { Platform } from "react-native"
import { MapStyleElement } from "react-native-maps"

import MapStyle from "@constants/Map"

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
        ios: MapStyle.planLight,
        android: MapStyle.googleMapLight,
      }),
    },
    dark: {
      mapStyle: Platform.select({
        ios: MapStyle.planDark,
        android: MapStyle.googleMapDark,
      }),
    },
  })

  return style.mapStyle
}

export default useMapStyle
