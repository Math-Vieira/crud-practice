import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/styled-components/themes';

type Props = {
  children: React.ReactNode;
};

export const GlobalProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
