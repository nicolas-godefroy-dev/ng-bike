import React from 'react';
import { Pressable, PressableProps, StyleProp, Text, View, ViewStyle } from 'react-native';

import { Skeleton } from '@components/Skeleton';
import { Station } from '@libs/ngBike';
import { tw } from '@ng-bike/twrnc';

import { StationCapacity, StationCapacitySkeleton } from './StationCapacity';

export type StationCapacityMarkerProps = Station & {
  testID?: PressableProps['testID'];
  onPress: PressableProps['onPress'];
};

export type StationListItemSkeletonProps = {
  style?: StyleProp<ViewStyle>;
};

export const STATION_LIST_ITEM_HEIGHT = 58;

export const StationListItem = ({
  numBikesAvailable,
  numDocksAvailable,
  name,
  onPress,
  testID,
}: StationCapacityMarkerProps) => (
  <Pressable
    onPress={onPress}
    style={tw`h-[58px] items-center justify-between flex-row px-4 py-2.5`}
    testID={testID}>
    <View style={tw`flex-row items-center flex-1 pr-12`}>
      <Text style={tw`capitalize text-footnote text-neutral`} numberOfLines={1}>
        {name}
      </Text>
    </View>
    <StationCapacity bikes={numBikesAvailable} docks={numDocksAvailable} />
  </Pressable>
);

export const StationListItemSkeleton = ({ style }: StationListItemSkeletonProps) => (
  <View style={[tw`h-[58px] items-center justify-between flex-row px-4 py-2.5`, style]}>
    <View style={tw`flex-row items-center flex-1 pr-12`}>
      <Skeleton style={tw`w-1/2 h-3 mr-12`} />
    </View>
    <StationCapacitySkeleton />
  </View>
);
