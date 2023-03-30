import { useNavigate } from 'react-router-dom';
import { AddIcon } from '../../utils/Icons';
import Button from 'react-bootstrap/Button';

const AddPostButton = () => {
  const navigate = useNavigate();

  return (
    <div className='text-center mb-1'>
      <Button
        variant='light'
        type='button'
        onClick={() => {
          navigate('/create-post');
        }}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default AddPostButton;
