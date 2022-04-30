import React, { memo } from "react"
import { StyleSheet, View } from "react-native"

import BorderRadius from "@constants/BorderRadius"
import Shadows from "@constants/Shadows"
import Spacing from "@constants/Spacing"
import useTheme from "@hooks/useTheme"

import StationCapacity, { StationCapacityProps } from "./StationCapacity"

export type StationCapacityMarkerProps = StationCapacityProps

const StationCapacityMarker = memo(
  (stationCapacityProps: StationCapacityMarkerProps) => {
    const theme = useTheme()

    return (
      <View style={[styles.container, { backgroundColor: theme.surface.base }]}>
        <StationCapacity {...stationCapacityProps} />
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius["3xl"],
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing[2],
    ...Shadows["md"],
  },
})

export default StationCapacityMarker
