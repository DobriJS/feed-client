import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div className='d-flex align-items-center justify-content-center mt-2'>
      <Spinner animation='border' role='status' />
    </div>
  );
};

export default LoadingSpinner;
