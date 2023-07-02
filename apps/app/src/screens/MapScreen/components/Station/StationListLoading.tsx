import { tw } from '@ng-bike/twrnc';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { StationListItemSkeleton } from './StationListItem';

export type StationListLoadingProps = {
  style?: StyleProp<ViewStyle>;
};

export const StationListLoading = ({ style }: StationListLoadingProps) => (
  <View style={[tw`items-center justify-between flex-1`, style]} testID="station-list-loading">
    <StationListItemSkeleton />
    <StationListItemSkeleton />
    <StationListItemSkeleton />
    <StationListItemSkeleton />
  </View>
);
