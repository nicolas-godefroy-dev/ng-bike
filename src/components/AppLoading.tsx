import * as SplashScreen from "expo-splash-screen"
import React, { useCallback, useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"

import BorderRadius from "@constants/BorderRadius"
import Colors from "@constants/Colors"
import Layout from "@constants/Layout"

import SplashScreenImage from "@assets/images/splash.png"

export type AppLoadingProps = {
  loading: boolean
  delay?: number
  animation?: boolean
  children?: React.ReactNode
}

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

const AppLoading = ({ children, loading, delay = 800 }: AppLoadingProps) => {
  const [imageReady, setImageReady] = useState(false)
  const progress = useSharedValue(1)

  const animatedSplashView = useAnimatedStyle(() => {
    const translateY = interpolate(
      progress.value,
      [0, 1],
      [-Layout.window.height - 600, 0],
    )
    const borderRadius = interpolate(
      progress.value,
      [0, 1],
      [BorderRadius["lg"], 0],
      Extrapolate.CLAMP,
    )

    return {
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      transform: [
        {
          translateY,
        },
      ],
    }
  })

  const animatedLogo = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    }
  })

  const onImageLoaded = useCallback(async () => {
    setImageReady(true)
  }, [])

  // Run the animation when the resources and the app logo are loaded
  useEffect(() => {
    if (!loading && imageReady) {
      // Hide animation with delay
      setTimeout(() => {
        if (!loading) {
          // Instruct SplashScreen not to hide yet, we want to do this manually
          SplashScreen.hideAsync().catch(() => {
            /* reloading the app might trigger some race conditions, ignore them */
          })

          progress.value = withSpring(0, {
            mass: 2,
            stiffness: 50,
          })
        }
      }, delay)
    }
  }, [loading, imageReady])

  return (
    <View style={styles.container}>
      {!loading && children}
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          styles.splashView,
          animatedSplashView,
        ]}>
        <Animated.Image
          style={[styles.logo, animatedLogo]}
          source={SplashScreenImage}
          onLoadEnd={onImageLoaded}
          fadeDuration={0}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  splashView: {
    backgroundColor: Colors.primary[500],
  },
  container: {
    flex: 1,
    backgroundColor: "red",
  },
})

export default AppLoading
