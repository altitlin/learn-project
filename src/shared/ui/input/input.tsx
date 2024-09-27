import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff } from 'shared/utils/testing';

import classes from './input.module.scss';

interface Props extends BaseUIProps, React.InputHTMLAttributes<HTMLInputElement> {}

const Impl: React.FC<Props> = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      type = 'text',
      testId,
      className,
      ...otherProps
    } = props;

    return (
      <input
        {...otherProps}
        {...getTestStuff(testId)}
        type={type}
        className={classNames(classes.input, {}, [className])}
        ref={ref}
      />
    );
  }
);

export const Input = React.memo(Impl);
