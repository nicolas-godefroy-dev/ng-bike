import React from "react"
import { StyleProp, View, ViewStyle } from "react-native"

import { tw } from "@theme"

import { StationListItemSkeleton } from "./StationListItem"

export type StationListLoadingProps = {
  style?: StyleProp<ViewStyle>
}

export const StationListLoading = ({ style }: StationListLoadingProps) => (
  <View style={[tw`items-center justify-between flex-1`, style]}>
    <StationListItemSkeleton />
    <StationListItemSkeleton />
    <StationListItemSkeleton />
    <StationListItemSkeleton />
  </View>
)
