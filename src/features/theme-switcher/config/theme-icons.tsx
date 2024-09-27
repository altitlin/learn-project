import React from 'react';

import { Theme } from 'shared/types/theme';
import IconThemeLight from 'shared/assets/icons/theme-light.svg';
import IconThemeDark from 'shared/assets/icons/theme-dark.svg';

export const ICONS_THEME: Record<Theme, React.ReactNode> = {
  light: <IconThemeLight />,
  dark: <IconThemeDark />,
};
