import React, { memo } from "react"
import { StyleSheet, View } from "react-native"

import useTheme from "@hooks/useTheme"
import borderRadius from "@theme/borderRadius"
import shadows from "@theme/shadows"
import spacing from "@theme/spacing"

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
    borderRadius: borderRadius["3xl"],
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing[2],
    ...shadows["md"],
  },
})

export default StationCapacityMarker
