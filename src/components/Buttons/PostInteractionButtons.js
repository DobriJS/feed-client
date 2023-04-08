import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { LikeIcon } from '../../utils/Icons';

const PostInteractionButtons = ({
  userToken,
  handlePostLike,
  likes,
  openAddCommentModalHandler
}) => {
  return (
    <>
      {!userToken ? (
        <Alert variant='danger'>
          <span className='fs-5'>Please LOG IN</span>
        </Alert>
      ) : null}
      <div className='d-flex justify-content-center'>
        <Button onClick={openAddCommentModalHandler} variant='light' disabled={!userToken}>
          <span className='fs-5'>Comment</span>
        </Button>
        <Button onClick={handlePostLike} className='mx-1' variant='light' disabled={!userToken}>
          <LikeIcon /> {likes}
        </Button>
      </div>
    </>
  );
};

export default PostInteractionButtons;
