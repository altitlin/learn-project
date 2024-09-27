import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.signIn
);

export const getUsername = createSelector(
  selectBase,
  (stateSignIn) => stateSignIn?.username ?? '',
);

export const getPassword = createSelector(
  selectBase,
  (stateSignIn) => stateSignIn?.password ?? '',
);

export const getIsLoading = createSelector(
  selectBase,
  (stateSignIn) => stateSignIn?.isLoading ?? false,
);

export const getError = createSelector(
  selectBase,
  (stateSignIn) => stateSignIn?.error ?? '',
);
