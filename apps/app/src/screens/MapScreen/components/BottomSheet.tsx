import { BottomSheetFlatList, default as RNBottomSheet } from '@gorhom/bottom-sheet';
import { tw } from '@ng-bike/twrnc';
import React, { useCallback, useRef } from 'react';
import { FlatListProps, ListRenderItemInfo } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Station } from '@/libs/ngBike';

import { StationListError } from './Station/StationListError';
import { StationListItem } from './Station/StationListItem';
import { StationListLoading } from './Station/StationListLoading';
import { WEATHER_INDICATOR_HEIGHT, WeatherIndicator } from './Weather/WeatherIndicator';

export type BottomSheetProps = {
  stations?: Station[];
  isLoading?: boolean;
  isError?: boolean;
  onPressStation: (station: Station) => void;
};

export const BottomSheet = ({
  stations = [],
  isError,
  isLoading,
  onPressStation,
}: BottomSheetProps) => {
  const insets = useSafeAreaInsets();
  const animatedPosition = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    top: animatedPosition.value - 12 - WEATHER_INDICATOR_HEIGHT,
  }));
  const bottomSheetRef = useRef<RNBottomSheet>(null);
  const snapPoints = isError ? ['25%'] : ['25%', '64%'];

  const keyExtractor = (item: Station) => item.stationId;

  const renderItem = useCallback(
    ({ item: station }: ListRenderItemInfo<Station>) => (
      <StationListItem
        {...station}
        onPress={() => {
          if (!bottomSheetRef.current) return;

          onPressStation(station);
          bottomSheetRef.current.snapToIndex(0);
        }}
        testID={`bottom-sheet-station-${station.stationId}`}
      />
    ),
    [onPressStation]
  );

  const ListEmptyComponent: FlatListProps<Station>['ListEmptyComponent'] = useCallback(() => {
    if (isLoading) {
      return <StationListLoading />;
    }

    if (isError) {
      return <StationListError />;
    }

    return null;
  }, [isError, isLoading]);

  return (
    <>
      <WeatherIndicator style={[tw`absolute right-3`, animatedStyle]} />
      <RNBottomSheet
        ref={bottomSheetRef}
        animatedPosition={animatedPosition}
        index={0}
        handleStyle={tw`h-4`}
        backgroundStyle={tw`rounded-md surface-base`}
        handleIndicatorStyle={tw`surface-300 w-[36px] h-[5px] -top-[4px]`}
        snapPoints={snapPoints}>
        <BottomSheetFlatList
          data={stations}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
        />
      </RNBottomSheet>
    </>
  );
};
