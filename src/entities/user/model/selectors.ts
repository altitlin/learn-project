import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.user
);

export const getAuthData = createSelector(
  selectBase,
  (stateUser) => stateUser.authData,
);
