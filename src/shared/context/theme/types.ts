import { Theme } from 'shared/types/theme';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
