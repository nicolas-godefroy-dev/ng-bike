import React from "react"
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native"

import { useTheme } from "@hooks/useTheme"
import borderRadius from "@theme/borderRadius"
import spacing from "@theme/spacing"

import NavigationFilledIcon from "@assets/icons/navigation-filled.svg"
import NavigationIcon from "@assets/icons/navigation.svg"

export type MyPositionButtonProps = {
  style?: StyleProp<ViewStyle>
  onPress: () => void
  active: boolean
}

export const MyPositionButton = ({
  style,
  onPress,
  active,
}: MyPositionButtonProps) => {
  const { colors, shadows } = useTheme()
  const Icon = active ? NavigationFilledIcon : NavigationIcon

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: colors.surface.base,
          borderRadius: borderRadius["md"],
        },
        shadows["md"],
        style,
      ]}
      onPress={onPress}>
      <Icon width={spacing[5]} height={spacing[5]} color={colors.text.base} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    aspectRatio: 1,
    borderRadius: borderRadius["md"],
    alignItems: "center",
    justifyContent: "center",
  },
})
