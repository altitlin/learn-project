import * as Routing from 'shared/constants/routing';

import { MenuElement } from '../types';

export const MENU_ELEMENTS: MenuElement[] = [
  {
    to: Routing.ROUTE_ROOT,
    title: 'Главная',
  },
  {
    to: Routing.ROUTE_ABOUT,
    title: 'О странице',
  },
];
