import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'app';

import 'shared/config/i18n/i18n';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.Suspense fallback=''>
    <App testId='app' />
  </React.Suspense>
);
