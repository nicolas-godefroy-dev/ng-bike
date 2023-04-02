import { BlurView } from "expo-blur"
import React, { useMemo } from "react"
import { Platform, useColorScheme } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@constants/layout"
import { ROUEN_REGION } from "@constants/map"
import { RootStackScreenProps } from "@navigation/types"
import { googleMap, tw } from "@theme"

import { BottomSheet } from "./components/BottomSheet"
import { MyPositionButton } from "./components/MyPositionButton"
import { StationCapacityMarker } from "./components/Station/StationCapacityMarker"
import { useMapScreen } from "./useMapScreen"

export const MapScreen = (_props: RootStackScreenProps<"Map">) => {
  const {
    mapRef,
    onUserLocationChange,
    onPanDrag,
    isFollowingUser,
    stations,
    handlePressMyLocation,
    isLoading,
    isError,
    onPressStation,
  } = useMapScreen()
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  const mapPadding = useMemo(() => {
    const platformGap = Platform.OS === "android" ? 6 : 0
    const bottomSheetHeight =
      WINDOW_HEIGHT * 0.25 - insets.bottom - 32 + platformGap

    return {
      top: insets.top + 20,
      right: insets.right,
      bottom: bottomSheetHeight,
      left: insets.left,
    }
  }, [insets.bottom, insets.left, insets.right, insets.top])

  return (
    <>
      <BlurView
        intensity={26}
        style={[
          tw`absolute top-0 left-0 z-10 w-full`,
          {
            height: insets.top,
          },
        ]}
      />
      <MapView
        ref={mapRef}
        onUserLocationChange={onUserLocationChange}
        onPanDrag={onPanDrag}
        initialRegion={ROUEN_REGION}
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT,
        }}
        customMapStyle={colorScheme === "dark" ? googleMap.dark : undefined}
        showsUserLocation
        minZoomLevel={13}
        showsBuildings={false}
        showsMyLocationButton={false}
        showsCompass={false}
        mapPadding={mapPadding}
        followsUserLocation={isFollowingUser}>
        {stations.map(station => (
          <Marker
            key={station.station_id}
            coordinate={{
              latitude: station.lat,
              longitude: station.lon,
            }}>
            <StationCapacityMarker
              bikes={station.num_bikes_available}
              docks={station.num_docks_available}
            />
          </Marker>
        ))}
      </MapView>
      <MyPositionButton
        active={isFollowingUser}
        style={[tw`absolute right-5`, { top: mapPadding.top }]}
        onPress={handlePressMyLocation}
      />
      <BottomSheet
        stations={stations}
        isLoading={isLoading}
        isError={isError}
        onPressStation={onPressStation}
      />
    </>
  )
}
