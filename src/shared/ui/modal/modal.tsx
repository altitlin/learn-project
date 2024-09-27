import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { Portal } from 'shared/ui/portal';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff } from 'shared/utils/testing';

import classes from './modal.module.scss';

const MODAL_ANIMATION_DELAY = 300;

interface Props extends BaseUIProps {
  open: boolean;
  disableEscapeKeyDown?: boolean;
  onClose?: () => void;
}

const Impl: React.FC<React.PropsWithChildren<Props>> = ({
  open,
  disableEscapeKeyDown = false,
  testId,
  className,
  children,
  onClose,
}) => {
  const [isClosing, setIsClosing] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const modalMods = React.useMemo(() => ({
    [classes.open]: open,
    [classes.closing]: isClosing,
  }), [open, isClosing]);

  const triggerClose = React.useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, MODAL_ANIMATION_DELAY);
  }, [onClose]);

  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      triggerClose();
    }
  }, [triggerClose]);

  React.useEffect(() => {
    if (open && !disableEscapeKeyDown) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (!disableEscapeKeyDown) {
        window.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timerRef.current);
      }
    };
  }, [open, disableEscapeKeyDown, handleKeyDown]);

  if (!open && !isClosing) return null;

  return (
    <Portal container={document.getElementById('app')}>
      <div
        {...getTestStuff(testId)}
        className={classNames(classes.modal, modalMods, [className])}
      >
        <div
          {...getTestStuff(testId, 'overlay')}
          className={classes.overlay}
          onClick={triggerClose}
        />
        <div {...getTestStuff(testId, 'content')} className={classes.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export const Modal = React.memo(Impl);
