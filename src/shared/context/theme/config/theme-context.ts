import React from 'react';

import { ThemeContextType } from '../types';

export const ThemeContext = React.createContext<ThemeContextType>(
  undefined as unknown as ThemeContextType
);
