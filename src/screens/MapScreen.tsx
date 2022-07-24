import { BlurView } from "expo-blur"
import * as Haptics from "expo-haptics"
import * as Location from "expo-location"
import React, { useCallback, useEffect, useMemo, useRef } from "react"
import { Platform, StyleSheet } from "react-native"
import MapView, {
  EdgePadding,
  EventUserLocation,
  MapEvent,
  Marker,
} from "react-native-maps"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useQuery } from "react-query"

import MyPositionButton from "@components/Map/MyPositionButton"
import StationCapacityMarker from "@components/Stations/StationCapacityMarker"
import StationsBottomSheet from "@components/Stations/StationsBottomSheet"
import Layout from "@constants/Layout"
import { ROUEN_REGION } from "@constants/Map"
import Spacing from "@constants/Spacing"
import useMapStyle from "@hooks/useMapStyle"
import { distance } from "@libs/distance"
import { getStations, sortStationsByDistance, Station } from "@libs/gbfsApi"
import { RootStackScreenProps } from "@navigation/types"
import { useStore } from "@store"

const MapScreen = (_props: RootStackScreenProps<"Map">) => {
  const mapStyle = useMapStyle()
  const insets = useSafeAreaInsets()
  const mapRef = useRef<MapView>(null)
  const {
    userLocation,
    isFollowingUser,
    setUserLocation,
    followUserLocation,
    unfollowUserLocation,
  } = useStore()

  const isTooFar = useMemo(() => {
    const isToFarOfRouen = distance(userLocation, ROUEN_REGION) > 10
    return isToFarOfRouen
  }, [userLocation.latitude, userLocation.longitude])

  const {
    isError,
    data: stations,
    isLoading,
  } = useQuery("stations", getStations, {
    refetchInterval: 1000 * 10, // Refetch at 10 seconds interval
    enabled: !isTooFar,
  })

  const sortedStations = useMemo(
    () => sortStationsByDistance(stations || [], userLocation),
    [stations, userLocation.latitude, userLocation.longitude],
  )

  const [status, requestPermission] = Location.useForegroundPermissions()

  const mapPadding: EdgePadding = useMemo(() => {
    const platformGap = Platform.OS === "android" ? 6 : 0
    const bottomSheetHeight =
      Layout.window.height * 0.25 - insets.bottom - Spacing["8"] + platformGap

    return {
      top: insets.top + Spacing["5"],
      right: insets.right,
      bottom: bottomSheetHeight,
      left: insets.left,
    }
  }, [])

  // Catch the user location
  const onUserLocationChange = useCallback((event: EventUserLocation) => {
    setUserLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    })
  }, [])

  // Disable follow the user location
  const onPanDrag = useCallback((_event: MapEvent<object>) => {
    unfollowUserLocation()
  }, [])

  // Center the map on the pressed station
  const onPressStation = useCallback((station: Station) => {
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
  }, [])

  const handlePressMyLocation = useCallback(() => {
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
  }, [mapRef.current, userLocation.latitude, userLocation.longitude])

  // Request user location
  useEffect(() => {
    requestPermission()
  }, [])

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
  }, [status, mapRef.current])

  return (
    <>
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
        style={[styles.myPositionButton, { top: insets.top + Spacing[5] }]}
        onPress={handlePressMyLocation}
      />
      <StationsBottomSheet
        stations={sortedStations}
        isLoading={isLoading}
        isError={isError}
        isTooFar={isTooFar}
        userLocation={userLocation}
        onPressStation={onPressStation}
      />
      <BlurView
        intensity={26}
        style={[
          styles.blurView,
          {
            height: insets.top,
          },
        ]}
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
    right: Spacing[5],
  },
  map: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
})

export default MapScreen
