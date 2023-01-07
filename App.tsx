import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { QueryClientProvider } from "react-query"
import { useColorScheme } from "src/theme/hooks/useColorScheme"

import { AppLoading } from "@components/AppLoading"
import { useCachedResources } from "@hooks/useCachedResources"
import { useRefetchOnAppFocus } from "@hooks/useRefetchOnAppFocus"
import queryClient from "@libs/queryClient"
import Navigation from "@navigation/Navigation"

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  useRefetchOnAppFocus()

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <SafeAreaProvider>
          <StatusBar />
          <AppLoading loading={!isLoadingComplete}>
            <Navigation colorScheme={colorScheme} />
          </AppLoading>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
})
