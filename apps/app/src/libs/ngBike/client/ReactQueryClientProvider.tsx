import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';

export type ReactQueryClientProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export const ReactQueryClientProvider = ({ children }: ReactQueryClientProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
