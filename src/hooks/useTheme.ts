import Colors from "@constants/Colors"

import useColorScheme from "./useColorScheme"

export type Theme = typeof Colors["light"] | typeof Colors["dark"]

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

  return Colors[colorScheme]
}

export default useTheme
