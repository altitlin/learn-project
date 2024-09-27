import React from 'react';

import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/local-storage';
import { Theme } from 'shared/types/theme'
import { BaseUIProps } from 'shared/types/component'
import { ThemeContext } from 'shared/context/theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.Light;

export const ThemeProvider: React.FC<React.PropsWithChildren<BaseUIProps>> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const themeContextValue = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
