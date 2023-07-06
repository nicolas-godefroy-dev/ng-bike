import { tw } from '@ng-bike/twrnc';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDeviceContext } from 'twrnc';

import { AppLoading } from '@/components/AppLoading';
import { NavigationThemeProvider } from '@/components/NavigationThemeProvider';
import { TabBar } from '@/components/TabBar';
import { useCachedResources } from '@/hooks/useCachedResources';
import { useRefetchOnAppFocus } from '@/hooks/useRefetchOnAppFocus';
import { ReactQueryClientProvider } from '@/libs/ngBike';

const RootLayout = () => {
  useDeviceContext(tw);
  useRefetchOnAppFocus();
  const isLoadingComplete = useCachedResources();

  return (
    <ReactQueryClientProvider>
      <GestureHandlerRootView style={tw`flex-1 surface-base`}>
        <SafeAreaProvider>
          <StatusBar />
          <NavigationThemeProvider>
            <AppLoading loading={!isLoadingComplete}>
              <TabBar />
            </AppLoading>
          </NavigationThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ReactQueryClientProvider>
  );
};

export default RootLayout;
