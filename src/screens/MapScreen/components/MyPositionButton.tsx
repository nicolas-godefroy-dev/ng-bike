import React from "react"
import { Pressable, StyleProp, ViewStyle } from "react-native"

import { tw } from "@theme"

import NavigationFilledIcon from "@assets/icons/navigation-filled.svg"
import NavigationIcon from "@assets/icons/navigation.svg"

export type MyPositionButtonProps = {
  onPress: () => void
  active: boolean
  style?: StyleProp<ViewStyle>
}

export const MyPositionButton = ({
  onPress,
  active,
  style,
}: MyPositionButtonProps) => {
  const Icon = active ? NavigationFilledIcon : NavigationIcon

  return (
    <Pressable
      style={[
        tw`items-center justify-center h-12 rounded-md shadow-md aspect-square surface-base`,
        style,
      ]}
      onPress={onPress}>
      <Icon {...tw`w-5 h-5 text-neutral`} />
    </Pressable>
  )
}
