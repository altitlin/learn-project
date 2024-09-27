import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  args: {
  },
  argTypes: {
    value: {
      type: { name: 'string' },
      description: 'The value of the input element, required for a controlled component.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      type: { name: 'string' },
      description: 'Type of the input element. It should be a valid HTML5 input type.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    className: {
      type: { name: 'string' },
      description: 'The custom class of the Input',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    autoFocus: {
      type: { name: 'boolean' },
      description: 'If true, the input element is focused during the first mount.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    testId: {
      description: 'Allow find element by data-testid attribute for testing',
    },
    onChange: {
      description: 'Callback fired when the value is changed.',
      table: {
        type: { summary: '(event: React.ChangeEvent) => void' },
      },
    },
  },
};

export default meta;

export const Usage: Story = {
  render: (props) => <Input {...props} />,
};
