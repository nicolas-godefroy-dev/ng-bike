import { useQuery } from "@tanstack/react-query"
import * as Haptics from "expo-haptics"
import * as Location from "expo-location"
import { useEffect, useRef } from "react"
import MapView, { MapViewProps } from "react-native-maps"

import { ROUEN_REGION } from "@constants/map"
import { distance } from "@libs/distance"
import { Station, getStations, sortStationsByDistance } from "@libs/gbfsClient"

import { useMapScreenStore } from "./useMapScreenStore"

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null)
  const {
    userLocation,
    isFollowingUser,
    setUserLocation,
    followUserLocation,
    unfollowUserLocation,
  } = useMapScreenStore()

  const isTooFar = distance(userLocation, ROUEN_REGION) > 30000 // 30 KM
  const {
    isError,
    data: stations,
    isLoading,
  } = useQuery({
    queryKey: ["stations"],
    queryFn: getStations,
    refetchInterval: 1000 * 60,
    enabled: !isTooFar,
  })

  const sortedStations = sortStationsByDistance(stations || [], userLocation)
  const [status] = Location.useForegroundPermissions({
    request: true,
  })

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
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

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

  return {
    mapRef,
    onUserLocationChange,
    onPanDrag,
    isFollowingUser,
    sortedStations,
    handlePressMyLocation,
    isLoading,
    isError,
    isTooFar,
    onPressStation,
  }
}
