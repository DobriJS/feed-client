import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/index';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, picture, password }, { rejectWithValue }) => {
    try {
      await API.registerUser({ username, email, picture, password });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await API.loginUser({ email, password });

      localStorage.setItem('userToken', data.token);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.getCurrentUser();
      const data = await response.data;

      if (response.data.username) {
        return data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
