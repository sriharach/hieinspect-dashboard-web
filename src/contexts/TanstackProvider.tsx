'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { addToast } from '@heroui/react';

interface TanstackProviderProps {
  children: React.ReactNode;
}

const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError(_, query) {
          throw query.reset();
        },
        refetchOnWindowFocus: false,
        // staleTime: 60 * 60 * 1000
      },
      mutations: {
        onError: () => {
          addToast({
            color: 'danger',
            title: 'Something went wrong. Please try again',
          });
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
