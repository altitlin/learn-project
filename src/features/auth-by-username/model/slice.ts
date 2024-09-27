import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { PrefixesSlice } from 'shared/types/redux';

import { SignInState } from './types';
import { signInByUsername } from './services';

const initialState: SignInState = {
  username: '',
  password: '',
  isLoading: false,
};

export const signInSlice = createSlice({
  name: PrefixesSlice.SignIn,
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    }),
    builder.addCase(signInByUsername.fulfilled, (state) => {
      state.isLoading = false;
    }),
    builder.addCase(signInByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
});

export const { reducer: signInReducer } = signInSlice;
export const { setUserName, setPassword } = signInSlice.actions;
