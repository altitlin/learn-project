import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  container?: HTMLElement | null;
}

const Impl: React.FC<React.PropsWithChildren<Props>> = ({
  container,
  children,
}) => {
  const [mountedNode, setMountedNode] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setMountedNode(container ?? document.body);
  }, [container]);

  return (
    <>
      {mountedNode ? ReactDOM.createPortal(children, mountedNode) : mountedNode}
    </>
  );
};

export const Portal = React.memo(Impl);
