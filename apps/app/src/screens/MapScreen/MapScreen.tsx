import { BlurView } from "expo-blur"
import * as Haptics from "expo-haptics"
import * as Location from "expo-location"
import React, { useEffect, useRef } from "react"
import { Platform, StyleSheet } from "react-native"
import MapView, { EdgePadding, MapViewProps, Marker } from "react-native-maps"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useQuery } from "react-query"

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@constants/layout"
import { ROUEN_REGION } from "@constants/map"
import { distance } from "@libs/distance"
import { getStations, sortStationsByDistance, Station } from "@libs/gbfsClient"
import { RootStackScreenProps } from "@navigation/types"
import { spacing, useTheme } from "@theme"

import { BottomSheet } from "./components/BottomSheet"
import { MyPositionButton } from "./components/MyPositionButton"
import { StationCapacityMarker } from "./components/Station/StationCapacityMarker"
import { useMapScreenStore } from "./hooks/useMapScreenStore"

export const MapScreen = (_props: RootStackScreenProps<"Map">) => {
  const mapRef = useRef<MapView>(null)
  const {
    userLocation,
    isFollowingUser,
    setUserLocation,
    followUserLocation,
    unfollowUserLocation,
  } = useMapScreenStore()
  const { mapStyle } = useTheme()
  const insets = useSafeAreaInsets()

  const platformGap = Platform.OS === "android" ? 6 : 0
  const bottomSheetHeight =
    WINDOW_HEIGHT * 0.25 - insets.bottom - spacing["8"] + platformGap
  const mapPadding: EdgePadding = {
    top: insets.top + spacing["5"],
    right: insets.right,
    bottom: bottomSheetHeight,
    left: insets.left,
  }

  const isTooFar = distance(userLocation, ROUEN_REGION) > 30000 // 30 KM
  const {
    isError,
    data: stations,
    isLoading,
  } = useQuery("stations", getStations, {
    refetchInterval: 1000 * 60, // Refetch at 10 seconds interval
    enabled: !isTooFar,
  })

  const sortedStations = sortStationsByDistance(stations || [], userLocation)
  const [status, requestPermission] = Location.useForegroundPermissions()

  // Catch the user location
  const onUserLocationChange: MapViewProps["onUserLocationChange"] = event => {
    if (!event.nativeEvent.coordinate) return

    setUserLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    })
  }

  // Disable follow the user location
  const onPanDrag: MapViewProps["onPanDrag"] = _event => unfollowUserLocation()

  // Center the map on the pressed station
  const onPressStation = (station: Station) => {
    if (!mapRef.current) return

    unfollowUserLocation()

    mapRef.current.animateCamera({
      center: {
        latitude: station.lat,
        longitude: station.lon,
      },
      zoom: 17,
      altitude: 1000,
    })
  }

  const handlePressMyLocation = () => {
    if (!mapRef.current) return

    // Center the map on the user location
    mapRef.current.animateCamera({
      center: {
        ...userLocation,
      },
      zoom: 15,
      altitude: 1400,
    })

    followUserLocation()

    if (Platform.OS === "ios") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }
  }

  // Request user location
  useEffect(() => {
    requestPermission()
  }, [requestPermission])

  // Focus the user location when the user location permission change
  useEffect(() => {
    const focusUserPosition = async () => {
      if (!mapRef.current) return
      const location = await Location.getCurrentPositionAsync()

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })

      mapRef.current.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      })
    }

    focusUserPosition()
  }, [status, setUserLocation])

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
