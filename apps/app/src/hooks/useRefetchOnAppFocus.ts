import { useEffect } from "react"
import { AppState, AppStateStatus, Platform } from "react-native"
import { focusManager } from "react-query"

const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active")
  }
}

export const useRefetchOnAppFocus = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange)

    return () => subscription.remove()
  }, [])
}
