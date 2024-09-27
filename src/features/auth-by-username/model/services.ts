import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { PrefixesAsyncThunk } from 'shared/types/redux';
import i18n from 'shared/config/i18n/i18n';
import { User, setAuthData } from 'entities/user';

export const signInByUsername = createAsyncThunk<
  User,
  {
    username: string;
    password: string;
  },
  {
    rejectValue: string;
  }
>(
  PrefixesAsyncThunk.SignInByUsername,
  async (authData, thunkApi) => {
    try {
      const response = await axios.post('http://localhost:4242/api/v1/auth/signin', authData);

      thunkApi.dispatch(setAuthData(response.data));

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(i18n.t(error.response.data.message));
    }
  },
);
