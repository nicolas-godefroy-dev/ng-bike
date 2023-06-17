import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { QueryClientProvider } from "@tanstack/react-query"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { useColorScheme } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useDeviceContext } from "twrnc"

import { AppLoading } from "@components/AppLoading"
import { useCachedResources } from "@hooks/useCachedResources"
import { useRefetchOnAppFocus } from "@hooks/useRefetchOnAppFocus"
import queryClient from "@libs/queryClient"
import { tw } from "@theme"

export default function App() {
  useDeviceContext(tw)
  useRefetchOnAppFocus()
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={tw`flex-1 surface-base`}>
        <SafeAreaProvider>
          <StatusBar />
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <AppLoading loading={!isLoadingComplete}>
              <Slot />
            </AppLoading>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
