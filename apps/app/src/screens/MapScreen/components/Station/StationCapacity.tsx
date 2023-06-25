import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { Skeleton } from '@components/Skeleton';
import { tw } from '@ng-bike/twrnc';

import BikeIllustration from '@assets/images/bike.svg';
import DockIllustration from '@assets/images/dock.svg';

export type StationCapacityProps = {
  bikes: number;
  docks: number;
};

export type StationCapacitySkeletonProps = {
  style?: StyleProp<ViewStyle>;
};

const getStatusColor = (capacity: number) => {
  const hasLowCapacity = capacity <= 2;
  const { color } = hasLowCapacity ? tw`text-error` : tw`text-success`;

  if (typeof color !== 'string') throw new Error('invalid color');
  return color;
};

export const StationCapacity = ({ bikes, docks }: StationCapacityProps) => (
  <View style={tw`flex-row items-center justify-center py-2`}>
    <BikeIllustration width={26} height={18} color={getStatusColor(bikes)} />
    <Text style={tw`ml-1 mr-2 text-callout text-neutral`}>{bikes}</Text>
    <DockIllustration width={4} height={18} color={getStatusColor(docks)} />
    <Text style={tw`ml-1 text-callout text-neutral`}>{docks}</Text>
  </View>
);

export const StationCapacitySkeleton = ({ style }: StationCapacitySkeletonProps) => (
  <View style={[tw`flex-row items-center justify-center py-2`, style]}>
    <Skeleton style={tw`ml-1 h-[21px] w-[36px]`} />
    <Skeleton style={tw`ml-2 h-[21px] w-[36px]`} />
  </View>
);
