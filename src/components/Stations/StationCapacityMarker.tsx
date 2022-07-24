import React, { memo } from "react"
import { StyleSheet, View } from "react-native"

import useTheme from "@hooks/useTheme"
import borderRadius from "@theme/borderRadius"
import spacing from "@theme/spacing"

import StationCapacity, { StationCapacityProps } from "./StationCapacity"

export type StationCapacityMarkerProps = StationCapacityProps

const StationCapacityMarker = memo(
  (stationCapacityProps: StationCapacityMarkerProps) => {
    const { colors, shadows } = useTheme()

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: colors.surface.base },
          shadows["md"],
        ]}>
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
  },
})

export default StationCapacityMarker
