import { combineReducers } from '@reduxjs/toolkit';

import { RootStateKeys, CreateReducerManager } from '../types';

export const createReducerManager: CreateReducerManager = (initialReducers) => {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: RootStateKeys[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      // TODO: should by fixed
      return combinedReducer(state as any, action);
    },
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    }
  }
};
