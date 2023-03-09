import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navibar from '../components/Navbar/NaviBar';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
