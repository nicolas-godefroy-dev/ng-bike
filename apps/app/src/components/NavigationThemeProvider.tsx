import { color } from '@ng-bike/twrnc';
import { Theme, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: color('primary-500'),
    background: color('neutral-900'),
    card: color('neutral-900'),
    text: color('neutral-100'),
    border: color('neutral-700'),
    notification: color('error-500'),
  },
};

const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: color('primary-500'),
    background: color('white'),
    card: color('white'),
    text: color('neutral-900'),
    border: color('neutral-200'),
    notification: color('error-500'),
  },
};

export type NavigationThemeProviderProps = {
  children: React.ReactNode;
};

export const NavigationThemeProvider = ({ children }: NavigationThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return <ThemeProvider value={isDarkMode ? DarkTheme : LightTheme}>{children}</ThemeProvider>;
};
