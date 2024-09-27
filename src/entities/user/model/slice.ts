import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { PrefixesSlice } from 'shared/types/redux';

import { UserState, User } from './types';

const initialState: UserState = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: PrefixesSlice.User,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    signOut: (state) => {
      state.authData = undefined;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { setAuthData, signOut } = userSlice.actions;
