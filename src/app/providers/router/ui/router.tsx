import React from 'react';
import { Routes } from 'react-router-dom';

import { BaseUIProps } from 'shared/types/component';
import { buildTestId } from 'shared/utils/testing';
import { PageLoader } from 'widgets/page-loader';

import { ROUTES } from '../config/routes';
import { renderRoute } from '../model/render-route';

export const AppRoutes: React.FC<BaseUIProps> = ({ testId }) => (
  <React.Suspense fallback={<PageLoader testId={buildTestId(testId, 'page-loader')} />}>
    <Routes>
      {ROUTES.map((route) => renderRoute({ item: route, testId }))}
    </Routes>
  </React.Suspense>
);
