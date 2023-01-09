import { Platform, StyleSheet } from "react-native"

const base = {
  sm: {
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.025,
    elevation: 1,
  },
  base: {
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.075,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.125,
    elevation: 3,
  },
  lg: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.19,
    shadowRadius: 20,
    elevation: 12,
  },
  "2xl": {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 16,
  },
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
}

export const shadows = {
  light: StyleSheet.create({
    sm: {
      ...base.sm,
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.025)" : "#000",
    },
    base: {
      ...base.base,
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.075)" : "#000",
    },
    md: {
      ...base.md,
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.125)" : "#000",
    },
    lg: {
      ...base.lg,
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.15)" : "#000",
    },
    xl: {
      ...base.xl,
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.19)" : "#000",
    },
    "2xl": {
      ...base["2xl"],
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.25)" : "#000",
    },
    none: {
      ...base.none,
      shadowColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0)" : "#000",
    },
  }),
  dark: StyleSheet.create({
    sm: {
      ...base.sm,
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0.025)" : "#fff",
    },
    base: {
      ...base.base,
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0.075)" : "#fff",
    },
    md: {
      ...base.md,
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0.125)" : "#fff",
    },
    lg: {
      ...base.lg,
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0.15)" : "#fff",
    },
    xl: {
      ...base.xl,
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0.19)" : "#fff",
    },
    "2xl": {
      ...base["2xl"],
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0.25)" : "#fff",
    },
    none: {
      ...base.none,
      shadowColor:
        Platform.OS === "android" ? "rgba(255, 255, 255, 0)" : "#fff",
    },
  }),
}
