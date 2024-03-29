import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon } from '../utils/Icons';

import Button from 'react-bootstrap/Button';
import LoadingSpinner from '../components/Spinner/LoadingSpinner';

const Profile = () => {
  const { userInfo, loading } = useSelector((state) => state.auth);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className='vh-100'>
          <div className='container py-5 h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-md-12 col-xl-4'>
                <div className='card bg-dark' style={{ borderRadius: '15px' }}>
                  <div className='card-body text-center'>
                    <div className='mt-3 mb-4'>
                      <img
                        src={userInfo?.pic}
                        className='rounded-circle img-fluid'
                        style={{ width: '120px' }}
                        alt='avatar'
                      />
                    </div>
                    <p className='mb-2 text-light fs-3'>{userInfo?.username}</p>
                    <p className='text-muted mb-4'>
                      <span className='mx-2 text-light fs-5'>{userInfo?.email}</span>
                    </p>
                    <div className='mb-4 pb-2'>
                      <Button variant='light'>
                        <FacebookIcon />
                      </Button>{' '}
                      <Button variant='light'>
                        <TwitterIcon />
                      </Button>
                    </div>
                    <div className='d-grid gap-2'>
                      <Link to={'/create-post'}>
                        <Button variant='light'>
                          <span className='fs-4'>Add Post</span>
                        </Button>
                      </Link>
                      <Link to={'/'}>
                        <Button variant='light'>
                          <span className='fs-5'>Go to POSTS</span>
                        </Button>
                      </Link>
                    </div>
                    <div className='d-flex justify-content-between text-center mt-5 mb-2'>
                      <div>
                        <p className='mb-2 h5 text-light'>{userInfo?.followers.length}</p>
                        <p className='mb-0 text-light'>Followers</p>
                      </div>
                      <div className='px-3'>
                        <p className='mb-2 h5 text-light'>{userInfo?.following.length}</p>
                        <p className='mb-0 text-light'>Following</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
