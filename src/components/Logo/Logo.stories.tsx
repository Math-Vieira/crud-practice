import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';

const title = 'svg/Logo';

export default {
  title,
  component: Logo
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
