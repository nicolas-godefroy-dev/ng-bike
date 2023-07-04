import { tw } from '@ng-bike/twrnc';
import { BlurView } from 'expo-blur';
import React, { useMemo } from 'react';
import { Platform, useColorScheme } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomSheet } from './components/BottomSheet';
import { MyPositionButton } from './components/MyPositionButton';
import { StationCapacityMarker } from './components/Station/StationCapacityMarker';
import { useMapScreen } from './useMapScreen';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@/constants/layout';
import { GOOGLE_MAP_STYLE, ROUEN_REGION } from '@/constants/map';

export const MapScreen = () => {
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
  } = useMapScreen();
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const mapPadding = useMemo(() => {
    const platformGap = Platform.OS === 'android' ? 6 : 0;
    const bottomSheetHeight = WINDOW_HEIGHT * 0.25 - insets.bottom - 32 + platformGap;

    return {
      top: insets.top + 20,
      right: insets.right,
      bottom: bottomSheetHeight,
      left: insets.left,
    };
  }, [insets.bottom, insets.left, insets.right, insets.top]);

  return (
    <>
      <BlurView
        testID="blurred-status-bar"
        intensity={12}
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
        customMapStyle={colorScheme === 'dark' ? GOOGLE_MAP_STYLE.dark : undefined}
        showsUserLocation
        minZoomLevel={13}
        showsBuildings={false}
        showsMyLocationButton={false}
        showsCompass={false}
        mapPadding={mapPadding}
        followsUserLocation={isFollowingUser}
        testID="map">
        {stations.map((station) => (
          <Marker
            testID={`marker-station-${station.stationId}`}
            key={station.stationId}
            coordinate={{
              latitude: station.lat,
              longitude: station.lon,
            }}>
            <StationCapacityMarker
              bikes={station.numBikesAvailable}
              docks={station.numDocksAvailable}
            />
          </Marker>
        ))}
      </MapView>
      <MyPositionButton
        testID="my-position"
        active={isFollowingUser}
        style={[tw`absolute right-3`, { top: mapPadding.top }]}
        onPress={handlePressMyLocation}
      />
      <BottomSheet
        stations={stations}
        isLoading={isLoading}
        isError={isError}
        onPressStation={onPressStation}
      />
    </>
  );
};
