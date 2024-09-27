import React from 'react';

export interface RouteItem {
  path: string;
  element?: React.FunctionComponent<{ testId?: string; }>;
  testId?: string;
  children?: RouteItem[];
}

export type RenderRoute = (options: {
  item: RouteItem;
  testId?: string;
}) => React.ReactNode | null;
