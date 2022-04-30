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

import Skeleton from "@components/Skeleton"
import BorderRadius from "@constants/BorderRadius"
import Spacing from "@constants/Spacing"
import Typography from "@constants/Typography"
import useTheme from "@hooks/useTheme"
import { Station } from "@libs/gbfsApi"

import StationCapacity, { StationCapacitySkeleton } from "./StationCapacity"

export type StationCapacityMarkerProps = Station & {
  onPress: PressableProps["onPress"]
}

export type StationListItemSkeletonProps = {
  style?: StyleProp<ViewStyle>
}

export const STATION_LIST_ITEM_HEIGHT = 58

const StationListItem = ({
  num_bikes_available,
  num_docks_available,
  station_id,
  name,
  onPress,
}: StationCapacityMarkerProps) => {
  const theme = useTheme()

  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <View style={styles.row}>
        <Text style={[styles.id, { color: theme.text.base }]}>
          {station_id}
        </Text>
        <Text
          style={[styles.name, { color: theme.text.base }]}
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

const StationListItemSkeleton = ({ style }: StationListItemSkeletonProps) => (
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
    paddingHorizontal: Spacing[4],
    paddingVertical: Spacing[2.5],
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    paddingRight: Spacing[12],
  },
  id: {
    ...Typography.title1,
  },
  idSkeleton: {
    height: 28,
    width: 28,
    borderRadius: BorderRadius["md"],
  },
  name: {
    ...Typography.footnote,
    marginLeft: Spacing[2],
    textTransform: "capitalize",
  },
  nameSkeleton: {
    marginLeft: Spacing[2],
    height: 13,
    width: "45%",
  },
})

export { StationListItemSkeleton }

export default StationListItem
