import { BlurView } from "expo-blur"
import React from "react"
import { StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@constants/layout"
import { ROUEN_REGION } from "@constants/map"
import { RootStackScreenProps } from "@navigation/types"
import { MyPositionButton } from "@screens/MapScreen/components/MyPositionButton"
import spacing from "@theme/spacing"

import { BottomSheet } from "./components/BottomSheet"
import { StationCapacityMarker } from "./components/Station/StationCapacityMarker"
import { useMapScreen } from "./hooks/useMapScreen"

export const MapScreen = (_props: RootStackScreenProps<"Map">) => {
  const {
    handlePressMyLocation,
    onPressStation,
    onPanDrag,
    onUserLocationChange,
    mapPadding,
    isFollowingUser,
    mapStyle,
    isError,
    isLoading,
    insets,
    sortedStations,
    isTooFar,
    mapRef,
  } = useMapScreen()

  return (
    <>
      <BlurView
        intensity={26}
        style={[
          styles.blurView,
          {
            height: insets.top,
            zIndex: 10,
          },
        ]}
      />
      <MapView
        ref={mapRef}
        onUserLocationChange={onUserLocationChange}
        onPanDrag={onPanDrag}
        initialRegion={ROUEN_REGION}
        style={styles.map}
        customMapStyle={mapStyle}
        showsUserLocation
        minZoomLevel={13}
        showsBuildings={false}
        showsMyLocationButton={false}
        showsCompass={false}
        mapPadding={mapPadding}
        followsUserLocation={isFollowingUser}>
        {sortedStations.map(station => (
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
        style={[styles.myPositionButton, { top: insets.top + spacing[5] }]}
        onPress={handlePressMyLocation}
      />
      <BottomSheet
        stations={sortedStations}
        isLoading={isLoading}
        isError={isError}
        isTooFar={isTooFar}
        onPressStation={onPressStation}
      />
    </>
  )
}

const styles = StyleSheet.create({
  blurView: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  myPositionButton: {
    position: "absolute",
    right: spacing[5],
  },
  map: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
})
