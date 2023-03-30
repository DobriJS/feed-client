import { Outlet } from 'react-router-dom';
import Login from '../Login';
import { useSelector } from 'react-redux';

const AuthGuard = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Outlet /> : <Login />;
};

export default AuthGuard;
