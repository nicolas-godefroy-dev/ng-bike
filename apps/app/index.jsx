import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import React from 'react';

// Must be exported or Fast Refresh won't update the context
export function App() {
  /**
   * Custom config for expo router
   * @see https://github.com/expo/router/issues/41
   **/
  const ctx = require.context('./src/routes');

  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
