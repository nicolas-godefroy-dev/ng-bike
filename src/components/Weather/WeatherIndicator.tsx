import React, { useMemo } from "react"
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native"
import Animated from "react-native-reanimated"
import { SvgProps } from "react-native-svg"
import { useQuery } from "react-query"

import useTheme from "@hooks/useTheme"
import { Coordinate } from "@libs/distance"
import { getWeather, Weather } from "@libs/weatherClient"
import borderRadius from "@theme/borderRadius"
import shadows from "@theme/shadows"
import spacing from "@theme/spacing"
import typography from "@theme/typography"

import CloudDrizzleIcon from "@assets/icons/cloud-drizzle.svg"
import CloudLightningIcon from "@assets/icons/cloud-lightning.svg"
import CloudRainIcon from "@assets/icons/cloud-rain.svg"
import CloudSnowIcon from "@assets/icons/cloud-snow.svg"
import Cloud from "@assets/icons/cloud.svg"
import Sun from "@assets/icons/sun.svg"

export const WEATHER_INDICATOR_HEIGHT = 34

export type WeatherIndicatorProps = Coordinate & {
  style?: StyleProp<ViewStyle>
}

const getWeatherIcon = (weather: Weather["weather"]): React.FC<SvgProps> => {
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

const WeatherIndicator = ({
  latitude,
  longitude,
  style,
}: WeatherIndicatorProps) => {
  const theme = useTheme()
  const { isError, isLoading, data } = useQuery(
    "weather",
    () => getWeather({ latitude, longitude }),
    {
      refetchInterval: 1000 * 60 * 30, // Refetch at 30 minutes interval
    },
  )

  const WeatherIcon = useMemo(
    () => getWeatherIcon(data?.weather ?? "Clouds"),
    [data?.weather],
  )

  if (isError || isLoading) return null

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: theme.surface.base },
        style,
      ]}>
      <WeatherIcon width={16} height={16} color={theme.text.base} />
      <Text style={[styles.text, { color: theme.text.base }]}>
        {data?.temp.toFixed(0)}°
      </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: WEATHER_INDICATOR_HEIGHT,
    borderRadius: borderRadius["md"],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing["2"],
    paddingVertical: spacing["1.5"],
    ...shadows["md"],
  },
  text: {
    paddingLeft: spacing["1"],
    ...typography["body"],
  },
})

export default WeatherIndicator
