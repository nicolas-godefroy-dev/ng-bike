import { Feather } from '@expo/vector-icons';
import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    (async () => {
      try {
        // Load fonts
        await Font.loadAsync({
          // OpenSans font
          OpenSans_400Regular,
          OpenSans_500Medium,
          OpenSans_600SemiBold,
          OpenSans_700Bold,
          // Feather icons
          ...Feather.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    })();
  }, []);

  return isLoadingComplete;
};
