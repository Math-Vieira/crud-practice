import { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from '.';

const title = 'atoms/ActionButton';

export default {
  title,
  component: ActionButton
} as Meta;

export const Default: StoryObj = {
  args: {
    type: 'edit'
  }
};

export const View: StoryObj = {
  args: {
    type: 'view'
  }
};

export const Trash: StoryObj = {
  args: {
    type: 'trash'
  }
};