import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Portal } from './portal';

type Story = StoryObj<typeof Portal>;

const meta: Meta<typeof Portal> = {
  title: 'Shared/Portal',
  component: Portal,
  argTypes: {
    container: {
      description: 'An HTML element that returns one. The container will have the portal children appended to it. By default, it uses the body of the top-level document object, so it\'s simply document.body most of the time.',
      table: {
        type: { summary: ['HTMLElement', 'null'].join('|') },
      },
    },
    children: {
      description: 'The children to render into the container',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;

export const Usage: Story = {
  render: (props) => {
    const [show, setShow] = React.useState(false);
    const container = React.useRef<HTMLDivElement>(null);

    const handleClick = React.useCallback(() => {
      setShow(prev => !prev);
    }, []);

    return (
      <div>
        <button onClick={handleClick}>
          {`${show ? 'Unmount' : 'Mount'} children`}
        </button>
        <div style={{ padding: '5px', marginTop: '8px', marginBottom: '8px', border: '1px solid #000' }}>
          It looks like I will render here.
          {show ? (
            <Portal {...props} container={container.current}>
              <span>But I actually render here!</span>
            </Portal>
          ) : null}
        </div>
        <div style={{ padding: '5px', border: '1px solid #000' }} ref={container} />
      </div>
    );
  },
};
