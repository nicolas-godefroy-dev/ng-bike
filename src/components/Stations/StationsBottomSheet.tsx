import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import React, { memo, useCallback, useMemo, useRef } from "react"
import { FlatListProps, ListRenderItemInfo, StyleSheet } from "react-native"
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import WeatherIndicator, {
  WEATHER_INDICATOR_HEIGHT,
} from "@components/Weather/WeatherIndicator"
import useTheme from "@hooks/useTheme"
import { Station } from "@libs/gbfsClient"
import borderRadius from "@theme/borderRadius"
import spacing from "@theme/spacing"

import StationListError from "./StationListError"
import StationListItem, { STATION_LIST_ITEM_HEIGHT } from "./StationListItem"
import StationListLoading from "./StationListLoading"

export type StationsBottomSheetProps = {
  stations?: Station[]
  isLoading?: boolean
  isError?: boolean
  isTooFar?: boolean
  onPressStation: (station: Station) => void
}

const StationsBottomSheet = memo(
  ({
    stations = [],
    isError,
    isTooFar,
    isLoading,
    onPressStation,
  }: StationsBottomSheetProps) => {
    const insets = useSafeAreaInsets()
    const animatedPosition = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => ({
      top: animatedPosition.value - spacing["3"] - WEATHER_INDICATOR_HEIGHT,
    }))
    const { colors } = useTheme()
    const bottomSheetRef = useRef<BottomSheet>(null)
    const data = isTooFar || isTooFar ? [] : stations
    const snapPoints = useMemo(() => {
      if (isError || isTooFar) return ["25%"]
      return ["25%", "64%"]
    }, [])

    const keyExtractor = useCallback((item: Station) => item.station_id, [])

    const renderItem = useCallback(
      ({ item: station }: ListRenderItemInfo<Station>) => (
        <StationListItem
          {...station}
          onPress={() => {
            if (!bottomSheetRef.current) return

            onPressStation(station)
            bottomSheetRef.current.snapToIndex(0)
          }}
        />
      ),
      [onPressStation, bottomSheetRef],
    )

    const getItemLayout = useCallback(
      (_data: any, index: number) => ({
        length: STATION_LIST_ITEM_HEIGHT,
        offset: STATION_LIST_ITEM_HEIGHT * index,
        index,
      }),
      [],
    )

    const ListEmptyComponent: FlatListProps<Station>["ListEmptyComponent"] =
      useCallback(() => {
        if (isLoading) {
          return <StationListLoading />
        } else if (isError || isTooFar) {
          return <StationListError error={isTooFar ? "distance" : "network"} />
        }

        return null
      }, [isError, isLoading, isTooFar])

    return (
      <>
        <WeatherIndicator style={[styles.weatherIndicator, animatedStyle]} />
        <BottomSheet
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
        </BottomSheet>
      </>
    )
  },
)

const styles = StyleSheet.create({
  background: {
    borderRadius: borderRadius["md"],
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

export default StationsBottomSheet
