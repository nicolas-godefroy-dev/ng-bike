import React from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native"

import { Skeleton } from "@components/Skeleton"
import { Station } from "@libs/gbfsClient"
import { tw } from "@theme"

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
  name,
  onPress,
}: StationCapacityMarkerProps) => (
  <Pressable
    style={tw`h-[58px] items-center justify-between flex-row px-4 py-2.5`}
    onPress={onPress}>
    <View style={tw`flex-row items-center flex-1 pr-12`}>
      <Text style={tw`capitalize text-footnote text-neutral`} numberOfLines={1}>
        {name}
      </Text>
    </View>
    <StationCapacity bikes={num_bikes_available} docks={num_docks_available} />
  </Pressable>
)

export const StationListItemSkeleton = ({
  style,
}: StationListItemSkeletonProps) => (
  <View
    style={[
      tw`h-[58px] items-center justify-between flex-row px-4 py-2.5`,
      style,
    ]}>
    <View style={tw`flex-row items-center flex-1 pr-12`}>
      <Skeleton style={tw`rounded-md h-7 w-7`} />
      <Skeleton style={tw`w-1/2 h-3 ml-12`} />
    </View>
    <StationCapacitySkeleton />
  </View>
)
