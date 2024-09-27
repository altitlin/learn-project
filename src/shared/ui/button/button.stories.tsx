import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

type ButtonProps = React.ComponentProps<typeof Button>
type Story = StoryObj<typeof Button>;

const variants: ButtonProps['variant'][] = ['contained', 'outlined', 'ghost']

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      description: 'The variant of the Button',
      control: { type: 'select' },
      options: variants,
      table: {
        type: { summary: variants.join('|') },
        defaultValue: { summary: 'contained' },
      },
    },
    className: {
      type: { name: 'string' },
      description: 'The custom class of the Button',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    loading: {
      type: { name: 'boolean' },
      description: 'If true, the loading indicator is shown and the button becomes disabled.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false', },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Used as a label inside a button',
      table: {
        type: { summary: ['ReactNode', 'string'].join('|') },
      },
    },
    testId: {
      description: 'Allow find element by data-testid attribute for testing',
    },
  },
};

export default meta;

export const Usage: Story = {
  render: (props) => <Button {...props} />,
};
