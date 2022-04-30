import React, { useMemo } from "react"
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native"

import BorderRadius from "@constants/BorderRadius"
import Shadows from "@constants/Shadows"
import Spacing from "@constants/Spacing"
import useTheme from "@hooks/useTheme"

import NavigationFilledIcon from "@assets/icons/navigation-filled.svg"
import NavigationIcon from "@assets/icons/navigation.svg"

export type MyPositionButtonProps = {
  style?: StyleProp<ViewStyle>
  onPress: () => void
  active: boolean
}

const MyPositionButton = ({
  style,
  onPress,
  active,
}: MyPositionButtonProps) => {
  const theme = useTheme()
  const Icon = useMemo(
    () => (active ? NavigationFilledIcon : NavigationIcon),
    [active],
  )

  return (
    <Pressable
      style={[styles.container, { backgroundColor: theme.surface.base }, style]}
      onPress={onPress}>
      <Icon width={Spacing[5]} height={Spacing[5]} color={theme.text.base} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    aspectRatio: 1,
    borderRadius: BorderRadius["md"],
    alignItems: "center",
    justifyContent: "center",
    ...Shadows["md"],
  },
})

export default MyPositionButton
