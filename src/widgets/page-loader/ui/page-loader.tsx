import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/lib/class-names';
import { buildTestId } from 'shared/lib/testing';
import { Spinner } from 'shared/ui/spinner';

import classes from './page-loader.module.scss';

const Impl: React.FC<BaseUIProps> = ({ testId, className }) => (
  <Spinner
    className={classNames(classes.pageLoader, {}, [className])}
    testId={buildTestId(testId, 'spinner-page')}
  />
);

export const PageLoader = React.memo(Impl);
