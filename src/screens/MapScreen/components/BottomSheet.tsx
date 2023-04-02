import {
  BottomSheetFlatList,
  default as RNBottomSheet,
} from "@gorhom/bottom-sheet"
import React, { useRef } from "react"
import { FlatListProps, ListRenderItemInfo } from "react-native"
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Station } from "@libs/gbfsClient"
import { tw } from "@theme"

import { StationListError } from "./Station/StationListError"
import { StationListItem } from "./Station/StationListItem"
import { StationListLoading } from "./Station/StationListLoading"
import {
  WEATHER_INDICATOR_HEIGHT,
  WeatherIndicator,
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
    top: animatedPosition.value - 12 - WEATHER_INDICATOR_HEIGHT,
  }))
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
      <WeatherIndicator style={[tw`absolute right-5`, animatedStyle]} />
      <RNBottomSheet
        ref={bottomSheetRef}
        animatedPosition={animatedPosition}
        index={0}
        handleStyle={tw`h-4`}
        backgroundStyle={tw`rounded-md surface-base`}
        handleIndicatorStyle={[
          {
            width: 36,
            height: 5,
            top: -4,
          },
          tw`surface-300`,
        ]}
        snapPoints={snapPoints}>
        <BottomSheetFlatList
          data={data}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
        />
      </RNBottomSheet>
    </>
  )
}
