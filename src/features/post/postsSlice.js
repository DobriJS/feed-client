import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  makeComment,
  deleteComment
} from './postsActions';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    });
    builder.addCase(fetchAllPosts.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts.unshift(payload);
    });
    builder.addCase(createPost.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, { payload }) => {
      state.loading = false;
      const post = state.posts.find((post) => post._id === payload._id);
      const idx = state.posts.indexOf(post);
      state.posts[idx] = payload;
    });
    builder.addCase(updatePost.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(makeComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(makeComment.fulfilled, (state, { payload }) => {
      state.loading = false;
      const post = state.posts.find((post) => post._id === payload._id);
      const idx = state.posts.indexOf(post);
      state.posts[idx] = payload;
    });
    builder.addCase(makeComment.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(deleteComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
      state.loading = false;
      const post = state.posts.find((post) => post._id === payload._id);
      const idx = state.posts.indexOf(post);
      state.posts[idx] = payload;
    });
    builder.addCase(deleteComment.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.loading = false;
      const post = state.posts.find((post) => post._id === payload._id);
      const idx = state.posts.indexOf(post);
      state.posts[idx] = payload;
    });
    builder.addCase(likePost.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.loading = false;
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
