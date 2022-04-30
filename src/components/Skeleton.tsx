import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import BorderRadius from "@constants/BorderRadius"
import Shadows from "@constants/Shadows"
import useTheme from "@hooks/useTheme"

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
    borderRadius: BorderRadius["base"],
    ...Shadows["none"],
  },
})

export default Skeleton
