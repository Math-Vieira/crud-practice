import { Meta, StoryObj } from '@storybook/react';
import { CustomerListItem } from '.';

const title = 'molecules/CustomerListItem';

export default {
  title,
  component: CustomerListItem
} as Meta;

export const Default: StoryObj = {
  args: {
    name: 'Customer Name'
  }
};
