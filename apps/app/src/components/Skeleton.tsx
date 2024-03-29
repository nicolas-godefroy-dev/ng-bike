import { tw } from '@ng-bike/twrnc';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export type SkeletonProps = {
  style?: StyleProp<ViewStyle>;
};

export const Skeleton = ({ style }: SkeletonProps) => (
  <View style={[tw`w-3 h-3 rounded shadow-none bg-neutral-200 dark:bg-neutral-600`, style]} />
);
