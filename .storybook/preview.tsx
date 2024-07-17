import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalProvider } from '../src/providers';
import { FormProvider, useForm } from 'react-hook-form';

export const decorators = [
  (Story) => {
    const methods = useForm();

    return (
      <GlobalProvider>
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      </GlobalProvider>
    );
  }
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
