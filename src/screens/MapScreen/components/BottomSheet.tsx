import {
  BottomSheetFlatList,
  default as RNBottomSheet,
} from "@gorhom/bottom-sheet"
import React, { useRef } from "react"
import { FlatListProps, ListRenderItemInfo, StyleSheet } from "react-native"
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Station } from "@libs/gbfsClient"
import { borderRadius, spacing, useTheme } from "@theme"

import { StationListError } from "./Station/StationListError"
import {
  StationListItem,
  STATION_LIST_ITEM_HEIGHT,
} from "./Station/StationListItem"
import { StationListLoading } from "./Station/StationListLoading"
import {
  WeatherIndicator,
  WEATHER_INDICATOR_HEIGHT,
} from "./Weather/WeatherIndicator"

export type BottomSheetProps = {
  stations?: Station[]
  isLoading?: boolean
  isError?: boolean
  isTooFar?: boolean
  onPressStation: (station: Station) => void
}

export const BottomSheet = ({
  stations = [],
  isError,
  isTooFar,
  isLoading,
  onPressStation,
}: BottomSheetProps) => {
  const insets = useSafeAreaInsets()
  const animatedPosition = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => ({
    top: animatedPosition.value - spacing["3"] - WEATHER_INDICATOR_HEIGHT,
  }))
  const { colors } = useTheme()
  const bottomSheetRef = useRef<RNBottomSheet>(null)
  const data = isError || isTooFar ? [] : stations
  const snapPoints = isError || isTooFar ? ["25%"] : ["25%", "64%"]

  const keyExtractor = (item: Station) => item.station_id

  const renderItem = ({ item: station }: ListRenderItemInfo<Station>) => (
    <StationListItem
      {...station}
      onPress={() => {
        if (!bottomSheetRef.current) return

        onPressStation(station)
        bottomSheetRef.current.snapToIndex(0)
      }}
    />
  )

  const getItemLayout = (_data: any, index: number) => ({
    length: STATION_LIST_ITEM_HEIGHT,
    offset: STATION_LIST_ITEM_HEIGHT * index,
    index,
  })

  const ListEmptyComponent: FlatListProps<Station>["ListEmptyComponent"] =
    () => {
      if (isLoading) {
        return <StationListLoading />
      } else if (isError || isTooFar) {
        return <StationListError error={isTooFar ? "distance" : "network"} />
      }

      return null
    }

  return (
    <>
      <WeatherIndicator style={[styles.weatherIndicator, animatedStyle]} />
      <RNBottomSheet
        ref={bottomSheetRef}
        animatedPosition={animatedPosition}
        index={0}
        handleStyle={[styles.handle]}
        backgroundStyle={[
          styles.background,
          { backgroundColor: colors.surface.base },
        ]}
        handleIndicatorStyle={[
          styles.handleIndicator,
          { backgroundColor: colors.surface[300] },
        ]}
        snapPoints={snapPoints}>
        <BottomSheetFlatList
          data={data}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
        />
      </RNBottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    borderRadius: borderRadius.md,
  },
  handle: {
    height: spacing[4],
  },
  handleIndicator: {
    width: 36,
    height: 5,
    top: -4,
  },
  weatherIndicator: {
    position: "absolute",
    right: spacing["5"],
  },
})