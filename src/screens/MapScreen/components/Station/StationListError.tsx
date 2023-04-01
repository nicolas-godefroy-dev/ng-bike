import React from "react"
import { StyleProp, Text, View, ViewStyle } from "react-native"

import { tw } from "@theme"

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
  const Icon = error === "network" ? WifiOffIcon : PinIcon
  const text =
    error === "network" ? "The network is unreachable" : "Rouen is too far away"

  return (
    <View style={[tw`items-center justify-center flex-1 px-5 py-6`, style]}>
      <Icon {...tw`w-12 h-12 text-neutral`} />
      <Text style={tw`items-center mt-2 text-caption1 text-neutral`}>
        {text}
      </Text>
    </View>
  )
}
