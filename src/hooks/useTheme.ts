import colors from "@theme/colors"

import useColorScheme from "./useColorScheme"

export type Theme = typeof colors["light"] | typeof colors["dark"]

/**
 * Get the colors of the current color scheme
 * @example
 * const theme = useColorScheme()
 * const style = {
 *    backgroundColor: theme.surface.base
 * }
 */
const useTheme = (): Theme => {
  const colorScheme = useColorScheme()

  return colors[colorScheme]
}

export default useTheme
