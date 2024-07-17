import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalProvider } from '../src/providers';

export const decorators = [
  (Story) => (
    <GlobalProvider>
      <Story />
    </GlobalProvider>
  )
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;