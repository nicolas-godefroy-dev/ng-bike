import { colors } from "./colors"
import { mapStyle } from "./mapStyle"
import { shadows } from "./shadows"

const lightTheme = {
  colors: colors.light,
  mapStyle: mapStyle.light,
  shadows: shadows.light,
}

const darkTheme = {
  colors: colors.dark,
  mapStyle: mapStyle.dark,
  shadows: shadows.dark,
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}
