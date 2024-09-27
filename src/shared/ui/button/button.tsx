import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff } from 'shared/utils/testing';

import classes from './button.module.scss';

interface Props extends BaseUIProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'ghost';
  loading?: boolean;
}

const Impl: React.FC<React.PropsWithChildren<Props>> = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      testId,
      className,
      loading = false,
      variant = 'contained',
      children,
      disabled,
      ...otherProps
    } = props;

    const additionalClasses = [className, classes[variant]];

    return (
      <button
        {...otherProps}
        {...getTestStuff(testId)}
        disabled={disabled || loading}
        className={classNames(classes.button, {}, additionalClasses)}
        ref={ref}
      >
        {!loading && children}
        {loading && 'Loading...'}
      </button>
    );
  }
);

export const Button = React.memo(Impl);
