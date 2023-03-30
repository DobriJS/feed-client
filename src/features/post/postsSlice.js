import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  likePost,
  makeComment
} from './postsActions';

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.posts = payload;
    });
    builder.addCase(fetchAllPosts.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(createPost.pending, (state, { payload }) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.posts.unshift(payload);
    });
    builder.addCase(createPost.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(getPostById.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(getPostById.fulfilled, (state, { payload }) => {
      /*    state.status = 'idle';
      state.singlePost = payload; */
    });
    builder.addCase(getPostById.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(updatePost.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(updatePost.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.posts = state.posts.filter((post) => post._id !== payload._id);
      state.posts.unshift(payload);
    });
    builder.addCase(updatePost.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(makeComment.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.posts = state.posts.filter((post) => post._id !== payload._id);
      state.posts.unshift(payload);
    });
    builder.addCase(likePost.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.posts = state.posts.filter((post) => post._id !== payload._id);
      state.posts.unshift(payload);
    });
    builder.addCase(deletePost.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.posts = state.posts.filter((post) => post._id !== payload);
    });
    builder.addCase(deletePost.rejected, (state, { payload }) => {
      state.error = payload;
    });
  }
});

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (id) => {
  return (state) => state.posts.posts.filter((post) => post._id === id)[0];
};

export default postsSlice.reducer;
