import axios from 'axios';

export const baseURL = 'http://localhost:4000';
// export const renderDeploymentAPI_URL = 'https://feed-api-2h09.onrender.com';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const API = axios.create({
  baseURL
});

API.interceptors.request.use((req) => {
  if (userToken) {
    req.headers['authorization'] = `Bearer ${userToken}`;
  }

  req.headers['Content-Type'] = 'application/json';

  return req;
});

export const registerUser = ({ username, email, picture, password }) => {
  return API.post('/auth/register', { username, email, picture, password });
};

export const loginUser = ({ email, password }) => {
  return API.post('/auth/login', { email, password });
};

export const getCurrentUser = () => API.get('/user/profile');

//
// POST API ENDPOINTS
export const fetchAllPosts = () => API.get('/');
export const getPostById = (id) => API.get(`/${id}`);
export const createPost = (newPost) => API.post('/create-post', newPost);
export const updatePost = (post) => API.put(`/edit-post/${post._id}`, post);
export const deletePost = (id) => API.delete(`/delete-post/${id}`);
export const likePost = (id) => API.put('/like', { id });
export const makeComment = (comment) => API.put('/comment', { comment });
