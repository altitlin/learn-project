import React from 'react';

import { AppRoutes } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff, buildTestId } from 'shared/utils/testing';
import { useTheme } from 'shared/hooks/use-theme';

const Impl: React.FC<BaseUIProps> = ({ testId, className }) => {
  const { theme } = useTheme();

  return (
    <div {...getTestStuff(testId)} className={classNames('app', {}, [theme, className])}>
      <Navbar testId={buildTestId(testId, 'navbar')} />
      <AppRoutes testId={buildTestId(testId, 'routes')} />
    </div>
  );
};

export const AppFrame = React.memo(Impl);
