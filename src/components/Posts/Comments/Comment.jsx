import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate } from '../../../utils/dateFormatter';
import { DeleteIcon } from '../../../utils/Icons';
import { deleteComment } from '../../../features/post/postsActions';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Comment = ({ pic, username, text, createdAt, commentId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const isAuthor = userInfo?.username === username;

  const handleDeleteComment = () => {
    const commentData = {
      postId: id,
      commentId: commentId
    };
    dispatch(deleteComment(commentData));
  };

  return (
    <>
      <Card className='mt-2 mb-1' bg='dark' text='light'>
        <Card.Header>
          <img
            className='rounded-circle shadow-1-strong me-3'
            src={pic}
            alt='avatar'
            width='60'
            height='60'
          />
          <span className='fw-bold'>{username}</span>
        </Card.Header>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
          <Card.Footer>
            <div className='d-flex justify-content-between'>
              <span>{formatDate(createdAt)}</span>
              {isAuthor && (
                <span>
                  <Button onClick={handleDeleteComment} variant='light' type='button'>
                    <DeleteIcon />
                  </Button>
                </span>
              )}
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comment;
