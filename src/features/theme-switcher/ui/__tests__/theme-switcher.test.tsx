import { render, fireEvent, act } from '@testing-library/react';

import { ThemeSwitcher } from 'features/theme-switcher';
import { buildTestId } from 'shared/utils/testing';

const TEST_ID = 'theme-switcher';

const mockThemeContext = {
  theme: 'light',
  toggleTheme: jest.fn(),
};

jest.mock('shared/hooks/use-theme', () => ({
  ...jest.requireActual('shared/hooks/use-theme'),
  useTheme: jest.fn().mockImplementation(() => mockThemeContext),
}));

describe('features.theme-switcher.ui.theme-switcher', () => {
  test('should properly render', () => {
    const { getByTestId } = render(<ThemeSwitcher testId={TEST_ID} />);

    const nodeButtonToggle = getByTestId(buildTestId(TEST_ID, 'button-toggle-theme')!)

    expect(nodeButtonToggle).toBeInTheDocument();

    act(() => fireEvent.click(nodeButtonToggle));

    expect(mockThemeContext.toggleTheme).toHaveBeenCalled();
  });
});
