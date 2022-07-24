import { ColorScheme } from "@theme/types"

import useColorScheme from "./useColorScheme"

export type StyleSheetWithColorScheme<T = any> = Record<
  ColorScheme,
  Record<string, T>
>

/**
 * Pick value based on the current color scheme
 * @example
 * const theme = useThemeSelect({
 *   light: { color: "red" },
 *   dark: { color: "blue" }
 * }) //  { color: "blue" }
 */
const useThemeSelect = <T>(styleSheet: StyleSheetWithColorScheme<T>) => {
  const colorScheme = useColorScheme()

  return styleSheet[colorScheme]
}

export default useThemeSelect
