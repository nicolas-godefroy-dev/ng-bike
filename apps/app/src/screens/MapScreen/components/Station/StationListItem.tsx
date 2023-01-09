import React from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native"

import { Skeleton } from "@components/Skeleton"
import { Station } from "@libs/gbfsClient"
import { borderRadius, spacing, typography, useTheme } from "@theme"

import { StationCapacity, StationCapacitySkeleton } from "./StationCapacity"

export type StationCapacityMarkerProps = Station & {
  onPress: PressableProps["onPress"]
}

export type StationListItemSkeletonProps = {
  style?: StyleProp<ViewStyle>
}

export const STATION_LIST_ITEM_HEIGHT = 58

export const StationListItem = ({
  num_bikes_available,
  num_docks_available,
  station_id,
  name,
  onPress,
}: StationCapacityMarkerProps) => {
  const { colors } = useTheme()

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Text style={[styles.id, { color: colors.text.base }]}>
          {station_id}
        </Text>
        <Text
          style={[styles.name, { color: colors.text.base }]}
          numberOfLines={1}>
          {name}
        </Text>
      </View>
      <StationCapacity
        bikes={num_bikes_available}
        docks={num_docks_available}
      />
    </Pressable>
  )
}

export const StationListItemSkeleton = ({
  style,
}: StationListItemSkeletonProps) => (
  <View style={[styles.container, style]}>
    <View style={styles.row}>
      <Skeleton style={styles.idSkeleton} />
      <Skeleton style={styles.nameSkeleton} />
    </View>
    <StationCapacitySkeleton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: STATION_LIST_ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2.5],
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    paddingRight: spacing[12],
  },
  id: {
    ...typography.title1,
  },
  idSkeleton: {
    height: 28,
    width: 28,
    borderRadius: borderRadius.md,
  },
  name: {
    ...typography.footnote,
    marginLeft: spacing[2],
    textTransform: "capitalize",
  },
  nameSkeleton: {
    marginLeft: spacing[2],
    height: 13,
    width: "45%",
  },
})
