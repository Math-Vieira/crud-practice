import { render } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

export const renderHelper = (children: React.ReactNode) => {
  return (
    <>
      {render(
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )}
    </>
  );
};
