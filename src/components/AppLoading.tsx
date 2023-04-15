import * as SplashScreen from "expo-splash-screen"
import React, { useEffect } from "react"
import { View } from "react-native"

import { tw } from "@theme"

export type AppLoadingProps = {
  loading: boolean
  delay?: number
  children?: React.ReactNode
}

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

export const AppLoading = ({
  children,
  loading,
  delay = 150,
}: AppLoadingProps) => {
  // Run the animation when the resources and the app logo are loaded
  useEffect(() => {
    if (loading) return

    setTimeout(() => {
      // Instruct SplashScreen not to hide yet, we want to do this manually
      SplashScreen.hideAsync().catch(() => {
        /* reloading the app might trigger some race conditions, ignore them */
      })
    }, delay)
  }, [delay, loading])

  return <View style={tw`flex-1`}>{!loading && children}</View>
}
