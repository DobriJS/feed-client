import Button from 'react-bootstrap/Button';
import { EditIcon, DeleteIcon } from '../../utils/Icons';

const PostAuthorInteractionButtons = ({ isAuthor, onEditClick, openDeleteModalHandler }) => {
  return (
    <>
      {isAuthor ? (
        <div className='d-flex justify-content-center mt-1'>
          <Button onClick={onEditClick} className='me-1' variant='light'>
            {' '}
            Edit <EditIcon />
          </Button>
          <Button onClick={openDeleteModalHandler} variant='light'>
            Delete <DeleteIcon />
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default PostAuthorInteractionButtons;
