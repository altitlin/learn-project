import { EnhancedStore, Reducer, Action, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from 'entities/user';
import { signInReducer } from 'features/auth-by-username';

// TODO: should be fixed

export interface RootState {
  user: ReturnType<typeof userReducer>;
  signIn?: ReturnType<typeof signInReducer>;
}

export type RootStateKeys = keyof RootState;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<RootState>;
  reduce: (state: RootState, action: Action) => RootState;
  add: (key: RootStateKeys, reducer: Reducer) => void;
  remove: (key: RootStateKeys) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager;
}

export type CreateReducerManager = (initialReducers: ReducersMapObject<RootState>) => ReducerManager;
