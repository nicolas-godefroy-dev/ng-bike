import { StyleSheet } from "react-native"

const shadows = StyleSheet.create({
  sm: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: `#000`,
    shadowRadius: 1,
    shadowOpacity: 0.025,
    elevation: 1,
  },
  base: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: `#000`,
    shadowRadius: 1,
    shadowOpacity: 0.075,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: `#000`,
    shadowRadius: 3,
    shadowOpacity: 0.125,
    elevation: 3,
  },
  lg: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: `#000`,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: `#000`,
    shadowOpacity: 0.19,
    shadowRadius: 20,
    elevation: 12,
  },
  "2xl": {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: `#000`,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 16,
  },
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: `#000`,
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
})

export default shadows
