import * as SplashScreen from "expo-splash-screen"
import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"

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
  delay = 800,
}: AppLoadingProps) => {
  // Run the animation when the resources and the app logo are loaded
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        if (!loading) {
          // Instruct SplashScreen not to hide yet, we want to do this manually
          SplashScreen.hideAsync().catch(() => {
            /* reloading the app might trigger some race conditions, ignore them */
          })
        }
      }, delay)
    }
  }, [loading])

  return <View style={styles.container}>{!loading && children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
