const Base = {
  base: {
    black: "#000",
    white: "#fff",
  },
  primary: {
    50: "#AAE5CE",
    500: "#164734",
  },
  danger: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    750: "#333333",
    800: "#262626",
    900: "#171717",
  },
}

const Theme = {
  light: {
    surface: {
      base: Base.base["white"],
      50: Base.neutral["50"],
      100: Base.neutral["100"],
      200: Base.neutral["200"],
      300: Base.neutral["300"],
    },
    text: {
      base: Base.neutral["800"],
      danger: Base.danger["900"],
      success: Base.primary["500"],
    },
  },
  dark: {
    surface: {
      base: Base.neutral["800"],
      50: Base.neutral["750"],
      100: Base.neutral["700"],
      200: Base.neutral["600"],
      300: Base.neutral["500"],
    },
    text: {
      base: Base.neutral["50"],
      danger: Base.danger["300"],
      success: Base.primary["50"],
    },
  },
}

const Colors = {
  ...Base,
  ...Theme,
}

export default Colors
