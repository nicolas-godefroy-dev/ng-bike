import * as Haptics from "expo-haptics"
import * as Location from "expo-location"
import { useEffect, useRef } from "react"
import { Platform } from "react-native"
import MapView, { EdgePadding, MapViewProps } from "react-native-maps"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useQuery } from "react-query"

import { WINDOW_HEIGHT } from "@constants/layout"
import { ROUEN_REGION } from "@constants/map"
import { useStore } from "@hooks/useStore"
import { useTheme } from "@hooks/useTheme"
import { distance } from "@libs/distance"
import { getStations, sortStationsByDistance, Station } from "@libs/gbfsClient"
import spacing from "@theme/spacing"

const DISTANCE_MAX = 30000 // 30 KM

export const useMapScreen = () => {
  const { mapStyle } = useTheme()
  const insets = useSafeAreaInsets()
  const mapRef = useRef<MapView>(null)
  const {
    userLocation,
    isFollowingUser,
    setUserLocation,
    followUserLocation,
    unfollowUserLocation,
  } = useStore()

  const isTooFar = distance(userLocation, ROUEN_REGION) > DISTANCE_MAX
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

  const platformGap = Platform.OS === "android" ? 6 : 0
  const bottomSheetHeight =
    WINDOW_HEIGHT * 0.25 - insets.bottom - spacing["8"] + platformGap
  const mapPadding: EdgePadding = {
    top: insets.top + spacing["5"],
    right: insets.right,
    bottom: bottomSheetHeight,
    left: insets.left,
  }

  // Catch the user location
  const onUserLocationChange: MapViewProps["onUserLocationChange"] = event => {
    if (!event?.nativeEvent?.coordinate) return

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

  return {
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
  }
}
