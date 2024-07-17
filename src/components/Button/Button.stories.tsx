import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const title = 'atoms/Button';

export default {
  title,
  component: Button
} as Meta;

export const Default: StoryObj = {
  args: {}
};

export const Outline: StoryObj = {
  args: {
    buttonStyle: 'outline'
  }
};

export const Loading: StoryObj = {
  args: {
    loading: true
  }
};
