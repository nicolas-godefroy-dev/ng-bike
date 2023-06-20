import { useQuery } from '@tanstack/react-query';
import * as Haptics from 'expo-haptics';
import * as Location from 'expo-location';
import { useCallback, useEffect, useRef } from 'react';
import MapView, { PanDragEvent, UserLocationChangeEvent } from 'react-native-maps';

import { Station, getStations, sortStationsByDistance } from '@libs/gbfsClient';

import { useLocationStore } from '../../hooks/useLocationStore';

export const useMapScreen = () => {
  const [status] = Location.useForegroundPermissions({ request: true });
  const mapRef = useRef<MapView>(null);
  const {
    userLocation,
    isFollowingUser,
    setUserLocation,
    followUserLocation,
    unfollowUserLocation,
  } = useLocationStore();
  const {
    isError,
    data: stations,
    isLoading,
  } = useQuery({
    queryKey: ['stations'],
    queryFn: getStations,
    refetchInterval: 1000 * 60,
    select: (data) => {
      return sortStationsByDistance(data, userLocation);
    },
    initialData: [],
  });

  // Catch the user location
  const onUserLocationChange = useCallback(
    (event: UserLocationChangeEvent) => {
      if (!event.nativeEvent.coordinate) return;

      setUserLocation({
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
      });
    },
    [setUserLocation]
  );

  // Disable follow the user location on pan drag
  const onPanDrag = useCallback(
    (_event: PanDragEvent) => unfollowUserLocation(),
    [unfollowUserLocation]
  );

  // Center the map on the pressed station
  const onPressStation = useCallback(
    (station: Station) => {
      if (!mapRef.current) return;

      unfollowUserLocation();
      mapRef.current.animateCamera({
        center: {
          latitude: station.lat,
          longitude: station.lon,
        },
        zoom: 17,
        altitude: 1000,
      });
    },
    [unfollowUserLocation]
  );

  const handlePressMyLocation = useCallback(() => {
    if (!mapRef.current) return;

    // Center the map on the user location
    mapRef.current.animateCamera({
      center: {
        ...userLocation,
      },
      zoom: 15,
      altitude: 1400,
    });

    followUserLocation();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, [followUserLocation, userLocation]);

  // Focus the user location when the user location permission change
  useEffect(() => {
    (async () => {
      if (!mapRef.current) return;
      const location = await Location.getCurrentPositionAsync();

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      mapRef.current.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
    })();
  }, [status, setUserLocation]);

  return {
    mapRef,
    onUserLocationChange,
    onPanDrag,
    isFollowingUser,
    stations,
    handlePressMyLocation,
    isLoading,
    isError,
    onPressStation,
  };
};
