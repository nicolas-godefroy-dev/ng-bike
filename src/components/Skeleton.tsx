import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import useTheme from "@hooks/useTheme"
import borderRadius from "@theme/borderRadius"
import shadows from "@theme/shadows"

export type SkeletonProps = {
  style?: StyleProp<ViewStyle>
}

const Skeleton = ({ style }: SkeletonProps) => {
  const theme = useTheme()

  return (
    <View
      style={[styles.container, { backgroundColor: theme.surface[100] }, style]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: 12,
    borderRadius: borderRadius["base"],
    ...shadows["none"],
  },
})

export default Skeleton
