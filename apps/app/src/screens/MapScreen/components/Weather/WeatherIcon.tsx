import React from 'react';
import { SvgProps } from 'react-native-svg';

import CloudLightningIcon from '@/assets/icons/cloud-lightning.svg';
import CloudRainIcon from '@/assets/icons/cloud-rain.svg';
import CloudSnowIcon from '@/assets/icons/cloud-snow.svg';
import Cloud from '@/assets/icons/cloud.svg';
import Sun from '@/assets/icons/sun.svg';

export type WeatherIconProps = {
  weather?: string;
  width?: number;
  height?: number;
  color?: string;
};

const getWeatherIcon = (weather?: string): React.FC<SvgProps> => {
  switch (weather) {
    case 'Clear':
      return Sun;
    case 'Thunderstorm':
      return CloudLightningIcon;
    case 'Drizzle':
    case 'Rain':
      return CloudRainIcon;
    case 'Snow':
      return CloudSnowIcon;
    default:
      return Cloud;
  }
};

export const WeatherIcon = ({ weather, width, height, color }: WeatherIconProps) => {
  const Icon = getWeatherIcon(weather);

  return <Icon width={width} height={height} color={color} />;
};
