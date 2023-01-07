import { themes } from "../constants/themes"
import { useColorScheme } from "./useColorScheme"

export type Theme = (typeof themes)["light"] | (typeof themes)["dark"]

/**
 * @example
 * const { colors} = useTheme()
 * const style = {
 *    backgroundColor: colors.surface.base
 * }
 */
export const useTheme = (): Theme => {
  const colorScheme = useColorScheme()

  return themes[colorScheme]
}
