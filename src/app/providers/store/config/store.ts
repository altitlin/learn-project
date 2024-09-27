import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/user';
import { signInReducer } from 'features/auth-by-username';

export const createStore = (initialState?: unknown) => {
  const store = configureStore({
    reducer: {
      user: userReducer,
      signIn: signInReducer
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  return store;
};

// TODO: should be fixed
export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
