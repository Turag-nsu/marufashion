'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, // Cache data for 1 minute
      retry: 2,         // Retry failed queries up to 2 times
      refetchOnWindowFocus: false, // Disable refetching on window focus
    },
  },
});

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
