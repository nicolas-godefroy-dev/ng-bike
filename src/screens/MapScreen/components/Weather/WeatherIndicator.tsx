import React from "react"
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native"
import Animated from "react-native-reanimated"
import { useQuery } from "react-query"

import { getWeather } from "@libs/weatherClient"
import { borderRadius, spacing, typography, useTheme } from "@theme"

import { useMapScreenStore } from "../../hooks/useMapScreenStore"
import { WeatherIcon } from "./WeatherIcon"

export const WEATHER_INDICATOR_HEIGHT = 34

export type WeatherIndicatorProps = {
  style?: StyleProp<ViewStyle>
}

export const WeatherIndicator = ({ style }: WeatherIndicatorProps) => {
  const userLocation = useMapScreenStore(state => state.userLocation)

  const { colors, shadows } = useTheme()
  const { isError, isLoading, data } = useQuery(
    "weather",
    () => getWeather(userLocation),
    {
      refetchInterval: 1000 * 60 * 30, // Refetch at 30 minutes interval
    },
  )

  if (isError || isLoading) return null

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: colors.surface.base },
        shadows.md,
        style,
      ]}>
      <WeatherIcon weather={data?.weather} size={16} color={colors.text.base} />
      <Text style={[styles.text, { color: colors.text.base }]}>
        {data?.temp.toFixed(0)}°
      </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: WEATHER_INDICATOR_HEIGHT,
    borderRadius: borderRadius.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing["2"],
    paddingVertical: spacing["1.5"],
  },
  text: {
    paddingLeft: spacing["1"],
    ...typography.body,
  },
})
