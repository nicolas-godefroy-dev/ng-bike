import React from 'react';
import { View } from 'react-native';

import { tw } from '@ng-bike/twrnc';

import { StationCapacity, StationCapacityProps } from './StationCapacity';

export type StationCapacityMarkerProps = StationCapacityProps;

export const StationCapacityMarker = (stationCapacityProps: StationCapacityMarkerProps) => (
  <View style={tw`items-center justify-center h-12 mb-12`}>
    <View style={tw`items-center justify-center px-2 shadow-md rounded-3xl surface-base`}>
      <StationCapacity {...stationCapacityProps} />
    </View>
    <View
      style={[
        tw`-mt-1.5 rounded-sm h-2.5 w-2.5  surface-base`,
        { transform: [{ rotateZ: '45deg' }] },
      ]}
    />
  </View>
);
