import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin, getCurrentUser } from './authActions';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  isAuth: false,
  isLoggedIn: false,
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false // for monitoring the registration process.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.isLoggedIn = false;
    }
  },
  extraReducers: {
    [getCurrentUser.pending]: (state) => {
      state.isAuth = false;
      state.loading = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.isAuth = true;
      state.loading = false;
      state.userInfo = payload;
    },
    [userLogin.pending]: (state) => {
      state.isLoggedIn = false;
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.error = payload;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
