import React from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/local-storage';
import { Theme } from 'shared/types/theme';
import { ThemeContext } from 'shared/context/theme';

export const useTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = React.useCallback(() => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme, setTheme]);

  return { theme, toggleTheme };
};
