'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { addToast } from '@heroui/react';
import { AxiosError } from 'axios';

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
        onError: (err) => {
          if (err instanceof AxiosError) {
            switch (err.request.status) {
              case 401:
                addToast({
                  color: 'danger',
                  title: 'Session Expired.',
                });
                break;

              case 403:
                addToast({
                  color: 'danger',
                  title: err.request.statusText,
                });
                break;

              case 500:
                addToast({
                  color: 'danger',
                  title: 'UNABLED TO PROCEED ERROR',
                });
                break;
            }
          }
        },
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default TanstackProvider;
