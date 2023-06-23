import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';

export type ClientProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export const ClientProvider = ({ children }: ClientProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
