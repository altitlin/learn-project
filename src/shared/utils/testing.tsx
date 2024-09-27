import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react'

import { StoreProvider, RootState } from 'app/providers/store';
import { TEST_ATTRIBUTE_NAME } from 'shared/constants/testing';
import i18nTesting from 'shared/config/i18n/i18n-testing';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: RootState;
  route?: string;
}

/**
 * Create an ID for testing purpose
 * @param {string} rootTestId - component root testing identifier
 * @param {string} testId - testing identfier
 * @returns - return testing identifier joined by a dot
 */
export const buildTestId = (rootTestId?: string, testId?: string | (() => string)) => {
  if (rootTestId) {
    const currentTestId = typeof testId === 'function' ? testId?.() : testId;

    return currentTestId ? [rootTestId, currentTestId].join('.') : rootTestId;
  }

  return undefined;
};

/**
 * Create an attribute-value pair for testing purpose
 * @param {string} rootTestId - component root testing identifier
 * @param {string} testId - testing identfier
 * @returns - return an attribute-value pair with testing identifier joined by a dot
 */
export const getTestStuff = (rootTestId?: string, testId?: string) => ({
  [TEST_ATTRIBUTE_NAME]: buildTestId(rootTestId, testId)
});

/**
 * Render passed component with providers for testing purpose
 * @param Component - component that need to wrap in providers
 * @param renderOptions - object options for rendering
 * @returns - return component with providers
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  {
    initialState,
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions
) => {
  const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTesting}>
        <StoreProvider initialState={initialState}>
          {children}
        </StoreProvider>
      </I18nextProvider>
    </MemoryRouter>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions })
};
