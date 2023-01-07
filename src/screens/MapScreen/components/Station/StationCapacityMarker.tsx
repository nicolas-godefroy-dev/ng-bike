import React from "react"
import { StyleSheet, View } from "react-native"

import { borderRadius, spacing, useTheme } from "@theme"

import { StationCapacity, StationCapacityProps } from "./StationCapacity"

export type StationCapacityMarkerProps = StationCapacityProps

export const StationCapacityMarker = (
  stationCapacityProps: StationCapacityMarkerProps,
) => {
  const { colors, shadows } = useTheme()

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.content,
          { backgroundColor: colors.surface.base },
          shadows["md"],
        ]}>
        <StationCapacity {...stationCapacityProps} />
      </View>
      <View
        style={[styles.triangle, { backgroundColor: colors.surface.base }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  triangle: {
    marginTop: -6,
    borderRadius: borderRadius["sm"],
    height: spacing[2.5],
    width: spacing[2.5],
    transform: [{ rotateZ: "45deg" }],
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: spacing[12],
    marginBottom: spacing[12],
  },
  content: {
    borderRadius: borderRadius["3xl"],
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing[2],
  },
})
