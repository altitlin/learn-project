import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';

type Story = StoryObj<typeof Spinner>;

const meta: Meta<typeof Spinner> = {
  title: 'Shared/Spinner',
  component: Spinner,
  argTypes: {
    className: {
      type: { name: 'string' },
      description: 'The custom class of the Button',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      description: 'Allow find element by data-testid attribute for testing',
    },
  },
};

export default meta;

export const Usage: Story = {
  render: (props) => <Spinner {...props} />,
};
