import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff } from 'shared/utils/testing';

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
