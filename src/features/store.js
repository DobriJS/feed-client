import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import postsReducer from './post/postsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer
  }
});

export default store;
