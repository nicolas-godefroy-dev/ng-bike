import { tw } from '@ng-bike/twrnc';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { WeatherIcon } from './WeatherIcon';

import { useLocationStore } from '@/hooks/useLocationStore';
import { useWeatherQuery } from '@/libs/ngBike';

export const WEATHER_INDICATOR_HEIGHT = 34;

export type WeatherIndicatorProps = {
  style?: StyleProp<ViewStyle>;
};

export const WeatherIndicator = ({ style }: WeatherIndicatorProps) => {
  const { latitude, longitude } = useLocationStore((state) => state.userLocation);
  const { data } = useWeatherQuery(
    { lat: `${latitude}`, lon: `${longitude}` },
    {
      refetchInterval: 1000 * 60 * 30, // 30 minutes,
    },
  );

  const temp = data?.weather?.main?.temp;
  const weather = data?.weather?.weather?.[0]?.main;
  if (!weather || typeof temp !== 'number') return null;

  return (
    <Animated.View
      style={[
        tw`h-[34px] rounded-md flex-row items-center justify-center px-2 py-1.5 surface-base shadow-md`,
        style,
      ]}
      testID="weather-indicator">
      <WeatherIcon weather={weather} {...tw`w-4 h-4 text-neutral`} />
      <Text style={tw`pl-1 text-body text-neutral`}>{temp.toFixed(0)}°</Text>
    </Animated.View>
  );
};
