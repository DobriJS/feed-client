import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './features/store';
import { fetchAllPosts } from './features/post/postsActions';
import { getCurrentUser } from './features/auth/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

async function main() {
  store.dispatch(fetchAllPosts());
  store.dispatch(getCurrentUser());

  ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

main();
