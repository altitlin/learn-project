import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'app/providers/error-boundary';
import { ThemeProvider } from 'app/providers/theme';
import { StoreProvider } from 'app/providers/store';
import { BaseUIProps } from 'shared/types/component';
import { buildTestId } from 'shared/utils/testing';

import { AppFrame } from './frame';

import './index.scss';

export const App: React.FC<BaseUIProps> = ({ testId }) => (
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <StoreProvider>
          <Routes>
            <Route
              path='*'
              element={<AppFrame testId={buildTestId(testId, 'frame')} />}
            />
          </Routes>
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
