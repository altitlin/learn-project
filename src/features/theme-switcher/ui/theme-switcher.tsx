import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { IconButton } from 'shared/ui/icon-button';
import { useTheme } from 'shared/hooks/use-theme';
import { buildTestId } from 'shared/utils/testing';
import { classNames } from 'shared/utils/class-names';

import { ICONS_THEME } from '../config/theme-icons';

const Impl: React.FC<BaseUIProps> = ({ testId, className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      icon={ICONS_THEME[theme]}
      className={classNames('', {}, [className])}
      testId={buildTestId(testId, 'button-toggle-theme')}
      onClick={toggleTheme}
    />
  );
};

export const ThemeSwitcher = React.memo(Impl);
