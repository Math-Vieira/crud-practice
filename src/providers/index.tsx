import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/styled-components/themes';
import { Toaster } from 'react-hot-toast';
import '@/styles/css/animations.css';
import '@/styles/css/global.css';

type Props = {
  children: React.ReactNode;
};

export const GlobalProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" />
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
