# Project Documentation Introduction
This project is a social media platform where users can create posts, like and comment on posts, and view other users' profiles. 
The project is built using React, Redux, and Node.js and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## File Structure
The project file structure is as follows:
- src: This directory contains all the source code for the project.
- actions: This directory contains all the Redux action creators for the project.
- components: This directory contains all the React components for the project.
- reducers: This directory contains all the Redux reducers for the project.
- services: This directory contains all the API service functions for the project.
- styles: This directory contains all the CSS styles for the project.
- utils: This directory contains all the utility functions for the project.
- App.jsx: This file contains the main App component for the project.
- index.jsx: This file contains the main entry point for the project.

## Redux 
The application uses Redux for state management. The following actions are available:
- fetchAllPosts: This action fetches all the posts from the API.
- createPost: This action creates a new post.
- updatePost: This action updates an existing post.
- deletePost: This action deletes a post.
- likePost: This action likes a post.
- makeComment: This action creates a new comment.
- deleteComment: This action deletes a comment.
- getCurrentUser: This action fetches the current user from the API.
- userLogin: This action logs in a user.
- registerUser: This action registers a new user.
- logout: This action logs out the current user.

## API
The project uses a Node.js API for data storage and retrieval. The following API endpoints are available:
- GET /api/posts: This endpoint returns all the posts.
- POST /api/posts: This endpoint creates a new post.
- PUT /api/posts/:id: This endpoint updates an existing post.
- DELETE /api/posts/:id: This endpoint deletes a post.
- POST /api/posts/:id/like: This endpoint likes a post.
- POST /api/posts/:id/comment: This endpoint creates a new comment.
- DELETE /api/posts/:postId/comment/:commentId: This endpoint deletes a comment.
- GET /api/users/current: This endpoint returns the current user.
- POST /api/users/login: This endpoint logs in a user.
- POST /api/users/register: This endpoint registers a new user.

## Conclusion
This project is a fully functional social media platform built using React, Redux, and Node.js. It allows users to create posts, like and comment on posts, and view other users' profiles. The project demonstrates the use of Redux for state management and a Node.js API for data storage and retrieval.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

