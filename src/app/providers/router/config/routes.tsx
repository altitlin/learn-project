import React from 'react';

import * as Routing from 'shared/constants/routing';
import { RouteItem } from '../types';

const MainPage = React.lazy(() => import('pages/main-page'));
const AboutPage = React.lazy(() => import('pages/about-page'));
const NotFoundPage = React.lazy(() => import('pages/not-found-page'));

export const ROUTES: RouteItem[] = [
  {
    path: Routing.ROUTE_ROOT,
    element: MainPage,
    testId: 'root',
  },
  {
    path: Routing.ROUTE_ABOUT,
    element: AboutPage,
    testId: 'about',
  },
  {
    path: Routing.ROUTE_NOT_FOUND,
    element: NotFoundPage,
    testId: 'not-found',
  },
];
