import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff } from 'shared/utils/testing';

import classes from './icon-button.module.scss';

interface Props extends BaseUIProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const Impl: React.FC<Props> = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      testId,
      className,
      icon,
      ...otherProps
    } = props;

    return (
      <button
      {...otherProps}
      {...getTestStuff(testId)}
      className={classNames(classes.iconButton, {}, [className])}
      ref={ref}
      >
        {icon}
      </button>
    );
  }
);

export const IconButton = React.memo(Impl);
