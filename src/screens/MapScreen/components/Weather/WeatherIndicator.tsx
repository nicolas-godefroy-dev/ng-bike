import { useQuery } from "@tanstack/react-query"
import React from "react"
import { StyleProp, Text, ViewStyle } from "react-native"
import Animated from "react-native-reanimated"

import { getWeather } from "@libs/weatherClient"
import { tw } from "@theme"

import { WeatherIcon } from "./WeatherIcon"
import { useLocationStore } from "../../../../hooks/useLocationStore"

export const WEATHER_INDICATOR_HEIGHT = 34

export type WeatherIndicatorProps = {
  style?: StyleProp<ViewStyle>
}

export const WeatherIndicator = ({ style }: WeatherIndicatorProps) => {
  const userLocation = useLocationStore(state => state.userLocation)
  const { isError, isLoading, data } = useQuery({
    queryKey: ["weather", userLocation],
    queryFn: () => getWeather(userLocation),
    refetchInterval: 1000 * 60 * 30,
  })

  if (isError || isLoading) return null

  return (
    <Animated.View
      style={[
        tw`h-[34px] rounded-md flex-row items-center justify-center px-2 py-1.5 surface-base shadow-md`,
        style,
      ]}
      testID="weather-indicator">
      <WeatherIcon weather={data.weather} {...tw`w-4 h-4 text-neutral`} />
      <Text style={tw`pl-1 text-body text-neutral`}>
        {data.temp.toFixed(0)}°
      </Text>
    </Animated.View>
  )
}
