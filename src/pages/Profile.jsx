import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../features/auth/authActions';
const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  console.log(userInfo);
  return (
    <div>
      <p>Username: </p>
    </div>
  );
};

export default Profile;
