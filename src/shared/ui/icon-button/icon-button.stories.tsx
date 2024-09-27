import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import IconThemeDark from 'shared/assets/icons/theme-dark.svg';

import { IconButton } from './icon-button';

type Story = StoryObj<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
  title: 'Shared/IconButton',
  component: IconButton,
  args: {
    icon: <div>{'<'}</div>,
  },
  argTypes: {
    icon: {
      description: 'The icon of the IconButton',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      type: { name: 'string' },
      description: 'The custom class of the IconButton',
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
  render: (props) => <IconButton {...props} />,
};
