import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import { StationListItemSkeleton } from "./StationListItem"

export type StationListLoadingProps = {
  style?: StyleProp<ViewStyle>
}

export const StationListLoading = ({ style }: StationListLoadingProps) => (
  <View style={[styles.container, style]}>
    <StationListItemSkeleton />
    <StationListItemSkeleton />
    <StationListItemSkeleton />
    <StationListItemSkeleton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
})
