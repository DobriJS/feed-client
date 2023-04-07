import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoggedIn } from './authSlice';
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
      dispatch(setLoggedIn(true));

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
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.getCurrentUser();
      const data = await response.data;
      if (response.data.username) {
        dispatch(setLoggedIn(true));
        return data;
      } else {
        dispatch(setLoggedIn(false));
        return;
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
