import { Meta, StoryObj } from '@storybook/react';
import { Moon } from '.';

const title = 'svg/Moon';

export default {
  title,
  component: Moon
} as Meta;

export const Default: StoryObj = {
  args: {}
};

export const Small: StoryObj = {
  args: {
    sizeKey: 'small'
  }
};

export const Medium: StoryObj = {
  args: {
    sizeKey: 'medium'
  }
};

export const Large: StoryObj = {
  args: {
    sizeKey: 'large'
  }
};
