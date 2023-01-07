import React from "react"
import { SvgProps } from "react-native-svg"

import { Weather } from "@libs/weatherClient"

import CloudDrizzleIcon from "@assets/icons/cloud-drizzle.svg"
import CloudLightningIcon from "@assets/icons/cloud-lightning.svg"
import CloudRainIcon from "@assets/icons/cloud-rain.svg"
import CloudSnowIcon from "@assets/icons/cloud-snow.svg"
import Cloud from "@assets/icons/cloud.svg"
import Sun from "@assets/icons/sun.svg"

export type WeatherIconProps = {
  weather?: Weather["weather"]
  size: number
  color: string
}

const getWeatherIcon = (weather?: Weather["weather"]): React.FC<SvgProps> => {
  switch (weather) {
    case "Clear":
      return Sun
    case "Thunderstorm":
      return CloudLightningIcon
    case "Drizzle":
      return CloudDrizzleIcon
    case "Rain":
      return CloudRainIcon
    case "Snow":
      return CloudSnowIcon
    default:
      return Cloud
  }
}

export const WeatherIcon = ({ weather, size, color }: WeatherIconProps) => {
  const Icon = getWeatherIcon(weather)

  return <Icon width={size} height={size} color={color} />
}
