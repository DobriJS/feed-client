import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

import store from './features/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchAllPosts } from './features/post/postsActions';
import { getCurrentUser } from './features/auth/authActions';
async function main() {
  store.dispatch(fetchAllPosts());
  store.dispatch(getCurrentUser());
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

main();
