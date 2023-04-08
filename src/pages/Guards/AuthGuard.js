import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from '../Login';

const AuthGuard = () => {
  const { userToken } = useSelector((state) => state.auth);

  return userToken ? <Outlet /> : <Login />;
};

export default AuthGuard;
