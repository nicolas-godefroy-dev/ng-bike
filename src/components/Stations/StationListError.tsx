import React, { useMemo } from "react"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"

import Spacing from "@constants/Spacing"
import Typography from "@constants/Typography"
import useTheme from "@hooks/useTheme"

import PinIcon from "@assets/icons/pin.svg"
import WifiOffIcon from "@assets/icons/wifi-off.svg"

export type StationListErrorProps = {
  style?: StyleProp<ViewStyle>
  isTooFar?: boolean
  error?: "network" | "distance"
}

const StationListError = ({
  style,
  error = "network",
}: StationListErrorProps) => {
  const theme = useTheme()
  const Icon = useMemo(
    () => (error === "network" ? WifiOffIcon : PinIcon),
    [error],
  )
  const text =
    error === "network" ? "The network is unreachable" : "Rouen is too far away"

  return (
    <View style={[styles.container, style]}>
      <Icon width={Spacing[12]} height={Spacing[12]} color={theme.text.base} />
      <Text style={[styles.text, { color: theme.text.base }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing["5"],
    paddingVertical: Spacing["6"],
    flex: 1,
  },
  text: {
    ...Typography.caption1,
    alignItems: "center",
    marginTop: Spacing["2"],
  },
})

export default StationListError
