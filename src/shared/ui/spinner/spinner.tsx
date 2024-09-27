import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/lib/class-names';
import { getTestStuff } from 'shared/lib/testing';

import classes from './spinner.module.scss';

const Impl: React.FC<BaseUIProps> = ({ className, testId }) => (
  <div {...getTestStuff(testId)} className={classNames('', {}, [className])}>
    <div {...getTestStuff(testId, 'spinner')} className={classes.spinner}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export const Spinner = React.memo(Impl);
