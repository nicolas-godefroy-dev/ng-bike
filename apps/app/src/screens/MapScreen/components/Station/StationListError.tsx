import React from "react"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"

import { spacing, typography, useTheme } from "@theme"

import PinIcon from "@assets/icons/pin.svg"
import WifiOffIcon from "@assets/icons/wifi-off.svg"

export type StationListErrorProps = {
  style?: StyleProp<ViewStyle>
  isTooFar?: boolean
  error?: "network" | "distance"
}

export const StationListError = ({
  style,
  error = "network",
}: StationListErrorProps) => {
  const { colors } = useTheme()
  const Icon = error === "network" ? WifiOffIcon : PinIcon

  const text =
    error === "network" ? "The network is unreachable" : "Rouen is too far away"

  return (
    <View style={[styles.container, style]}>
      <Icon width={spacing[12]} height={spacing[12]} color={colors.text.base} />
      <Text style={[styles.text, { color: colors.text.base }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing["5"],
    paddingVertical: spacing["6"],
    flex: 1,
  },
  text: {
    ...typography.caption1,
    alignItems: "center",
    marginTop: spacing["2"],
  },
})
