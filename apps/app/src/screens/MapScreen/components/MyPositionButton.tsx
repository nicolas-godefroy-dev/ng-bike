import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

import { tw } from '@ng-bike/twrnc';

import NavigationFilledIcon from '@assets/icons/navigation-filled.svg';
import NavigationIcon from '@assets/icons/navigation.svg';

export type MyPositionButtonProps = {
  onPress: () => void;
  active: boolean;
  testID?: PressableProps['testID'];
  style?: StyleProp<ViewStyle>;
};

export const MyPositionButton = ({ onPress, active, style, testID }: MyPositionButtonProps) => {
  const Icon = active ? NavigationFilledIcon : NavigationIcon;

  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      style={[
        tw`items-center justify-center rounded-md shadow-md w-11 h-11 aspect-square surface-base`,
        style,
      ]}>
      <Icon {...tw`w-5 h-5 text-neutral`} />
    </Pressable>
  );
};
