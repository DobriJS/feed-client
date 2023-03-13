import { createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL, config } from '../../api/index';
import axios from 'axios';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = userToken;
      if (!token) return;
      const response = await axios.get(`${backendURL}/user/profile`, {
        headers: {
          Authorization: token
        }
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, picture, password }, { rejectWithValue }) => {
    try {
      await axios.post(
        `${backendURL}/auth/register`,
        { username, email, picture, password },
        config
      );
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
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${backendURL}/auth/login`, { email, password }, config);
      // store user's token in local storage
      localStorage.setItem('userToken', data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
