import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import AuthGuard from './Guards/AuthGuard';
import CreatePost from '../components/Posts/CreatePost';
import PostDetails from '../components/Posts/PostDetails';
import EditPost from '../components/Posts/EditPost';
import ErrorPage from './ErrorPage';

const Dashboard = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<AuthGuard />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/edit-post/:id' element={<EditPost />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Dashboard;
