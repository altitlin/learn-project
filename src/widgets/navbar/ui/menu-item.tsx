import React from 'react';
import { useTranslation } from 'react-i18next';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { buildTestId } from 'shared/utils/testing';
import { AppNavLink } from 'shared/ui/app-nav-link';

interface Props extends BaseUIProps {
  to: string;
  title: string;
}

const Impl: React.FC<Props> = ({ to, title, testId, className }) => {
  const { t } = useTranslation();

  return (
    <AppNavLink
      to={to}
      variant='secondary'
      className={classNames('', {}, [className])}
      testId={buildTestId(testId, 'menu-item-link')}
    >
      {t(title)}
    </AppNavLink>
  );
};

export const MenuItem = React.memo(Impl);
