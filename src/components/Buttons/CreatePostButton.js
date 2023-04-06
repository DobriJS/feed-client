import { useNavigate } from 'react-router-dom';
import { AddIcon } from '../../utils/Icons';
import Button from 'react-bootstrap/Button';

const AddPostButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant='light' type='button' onClick={() => navigate('/create-post')}>
      <AddIcon />
    </Button>
  );
};

export default AddPostButton;
