import { fireEvent, act } from '@testing-library/react';

import { getTestStuff, renderWithProviders } from 'shared/utils/testing';
import { AppNavLink } from 'shared/ui/app-nav-link';

const TEST_ID = 'app-nav-link';

describe('shared.ui.app-nav-link', () => {
  test('should correctly render by default', () => {
    const testTo = '/qwerty';
    const testChildId = 'child';

    const { getByTestId } = renderWithProviders(
      <AppNavLink
        to={testTo}
        testId={TEST_ID}
      >
        <div {...getTestStuff(testChildId)} />
      </AppNavLink>,
      {}
    );

    const $node = getByTestId(TEST_ID);

    expect($node).toBeInTheDocument();
    expect($node).toHaveClass('primary');
    expect(getByTestId(testChildId)).toBeInTheDocument();
  });

  test('should correctly render with secondary variant', () => {
    const testTo = '/qwerty';

    const { getByTestId } = renderWithProviders(
      <AppNavLink
        to={testTo}
        variant='secondary'
        testId={TEST_ID}
      />,
      {}
    );

    const $node = getByTestId(TEST_ID);

    expect($node).toBeInTheDocument();
    expect($node).not.toHaveClass('primary');
    expect($node).toHaveClass('secondary');
  });

  test('should correctly render with activeClassName', () => {
    const testTo = '/qwerty';
    const testActiveClassName = 'activeLink';

    const { getByTestId } = renderWithProviders(
      <AppNavLink
        to={testTo}
        activeClassName={testActiveClassName}
        testId={TEST_ID}
      />,
      {}
    );

    const $node = getByTestId(TEST_ID);

    expect($node).not.toHaveClass(testActiveClassName);

    act(() => fireEvent.click($node));

    expect($node).toHaveClass(testActiveClassName);
  });
});
