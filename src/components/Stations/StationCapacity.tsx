import React from "react"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"

import Skeleton from "@components/Skeleton"
import useTheme, { Theme } from "@hooks/useTheme"
import spacing from "@theme/spacing"
import typography from "@theme/typography"

import BikeIllustration from "@assets/images/bike.svg"
import DockIllustration from "@assets/images/dock.svg"

export type StationCapacityProps = {
  bikes: number
  docks: number
}

export type StationCapacitySkeletonProps = {
  style?: StyleProp<ViewStyle>
}

const getStatusColor = (capacity: number, theme: Theme) => {
  const hasLowCapacity = capacity <= 2

  return hasLowCapacity ? theme.text.danger : theme.text.success
}

const StationCapacity = ({ bikes, docks }: StationCapacityProps) => {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <BikeIllustration
        width={26}
        height={18}
        color={getStatusColor(bikes, theme)}
      />
      <Text
        style={[
          styles.textBase,
          { color: theme.text.base, marginRight: spacing[2] },
        ]}>
        {bikes}
      </Text>
      <DockIllustration
        width={4}
        height={18}
        color={getStatusColor(docks, theme)}
      />
      <Text style={[styles.textBase, { color: theme.text.base }]}>{docks}</Text>
    </View>
  )
}

const StationCapacitySkeleton = ({ style }: StationCapacitySkeletonProps) => (
  <View style={[styles.container, style]}>
    <Skeleton style={styles.bikesSkeleton} />
    <Skeleton style={styles.docksSkeleton} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing[2],
  },
  textBase: {
    ...typography.callout,
    marginLeft: spacing[1],
  },
  docksSkeleton: {
    marginLeft: spacing[2],
    height: 21,
    width: 36,
  },
  bikesSkeleton: {
    marginLeft: spacing[1],
    height: 21,
    width: 36,
  },
})

export { StationCapacitySkeleton }

export default StationCapacity
