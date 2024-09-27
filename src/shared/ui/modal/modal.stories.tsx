import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {
    open: {
      type: { name: 'boolean' },
      description: 'If true, the component is shown.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    disableEscapeKeyDown: {
      type: { name: 'boolean' },
      description: 'If true, hitting escape will not fire the onClose callback.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    className: {
      type: { name: 'string' },
      description: 'The custom class of the Modal',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      description: 'Allow find element by data-testid attribute for testing',
    },
    onClose: {
      description: 'Callback fired when the component requests to be closed.',
    },
  },
};

export default meta;

export const Usage: Story = {
  render: (props) => {
    const [open, setOpen] = React.useState(false);

    const toggleShowModal = React.useCallback(() => {
      setOpen(prev => !prev);
    }, []);

    return (
      <>
        <button onClick={toggleShowModal}>Open modal</button>
        <Modal {...props} open={open} onClose={toggleShowModal}>
          <h1>Text in a modal</h1>
          <p>Aliquid amet deserunt earum!</p>
        </Modal>
      </>
    );
  },
};
