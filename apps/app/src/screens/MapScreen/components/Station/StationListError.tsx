import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { tw } from '@ng-bike/twrnc';

import WifiOffIcon from '@assets/icons/wifi-off.svg';

export type StationListErrorProps = {
  style?: StyleProp<ViewStyle>;
};

export const StationListError = ({ style }: StationListErrorProps) => (
  <View
    style={[tw`items-center justify-center flex-1 px-5 py-6`, style]}
    testID="station-list-error">
    <WifiOffIcon {...tw`w-12 h-12 text-neutral`} />
    <Text style={tw`items-center mt-2 text-caption1 text-neutral`}>The network is unreachable</Text>
  </View>
);
