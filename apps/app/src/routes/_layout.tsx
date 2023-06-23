import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDeviceContext } from 'twrnc';

import { AppLoading } from '@components/AppLoading';
import { useCachedResources } from '@hooks/useCachedResources';
import { useRefetchOnAppFocus } from '@hooks/useRefetchOnAppFocus';
import { ClientProvider } from '@libs/ngBike';
import { tw } from '@ng-bike/twrnc';

export default function App() {
  useDeviceContext(tw);
  useRefetchOnAppFocus();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <ClientProvider>
      <GestureHandlerRootView style={tw`flex-1 surface-base`}>
        <SafeAreaProvider>
          <StatusBar />
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AppLoading loading={!isLoadingComplete}>
              <Slot />
            </AppLoading>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ClientProvider>
  );
}
