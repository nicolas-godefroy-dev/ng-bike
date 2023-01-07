const base = {
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

export const colors = {
  light: {
    surface: {
      base: base.base["white"],
      50: base.neutral["50"],
      100: base.neutral["100"],
      200: base.neutral["200"],
      300: base.neutral["300"],
    },
    text: {
      base: base.neutral["800"],
      danger: base.danger["900"],
      success: base.primary["500"],
    },
  },
  dark: {
    surface: {
      base: base.neutral["800"],
      50: base.neutral["750"],
      100: base.neutral["700"],
      200: base.neutral["600"],
      300: base.neutral["500"],
    },
    text: {
      base: base.neutral["50"],
      danger: base.danger["300"],
      success: base.primary["50"],
    },
  },
}
