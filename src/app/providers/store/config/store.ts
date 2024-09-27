import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from 'entities/user';

import { RootState } from '../types';

import { createReducerManager } from './reducer-manager';

export const createStore = (initialState?: unknown) => {
  const rootReducer: ReducersMapObject<RootState> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

// TODO: should be fixed
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
