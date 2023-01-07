import { themes } from "@theme"

import { useColorScheme } from "./useColorScheme"

export type Theme = typeof themes["light"] | typeof themes["dark"]

/**
 * @example
 * const { colors } = useTheme()
 * const style = {
 *    backgroundColor: colors.surface.base
 * }
 */
export const useTheme = (): Theme => {
  const colorScheme = useColorScheme()

  return themes[colorScheme]
}
