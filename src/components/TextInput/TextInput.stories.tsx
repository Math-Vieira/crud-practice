import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '.';

const title = 'atoms/TextInput';

export default {
  title,
  component: TextInput
} as Meta;

export const Default: StoryObj = {
  args: {
    label: 'Input label',
    placeholder: 'Input placeholder',
    name: 'inputName',
    disabled: false
  }
};
