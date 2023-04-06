import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate } from '../../../utils/dateFormatter';
import { DeleteIcon } from '../../../utils/Icons';
import { deleteComment } from '../../../features/post/postsActions';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Comment = ({ pic, username, text, createdAt, commentId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const isAuthor = userInfo?.username === username;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteComment = () => {
    const commentData = {
      postId: id,
      commentId: commentId
    };
    dispatch(deleteComment(commentData));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this comment?</Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleClose}>
            Close
          </Button>
          <Button variant='dark' onClick={handleDeleteComment}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className='mt-2 mb-1' bg='dark' text='light'>
        <Card.Header>
          <img
            className='rounded-circle shadow-1-strong me-3'
            src={pic}
            alt='avatar'
            width='60'
            height='60'
          />
          <span className='fw-bold fs-5'>{username}</span>
        </Card.Header>
        <Card.Body>
          <Card.Text className='fs-5'>{text}</Card.Text>
          <Card.Footer className='border-white border-top-3 border-bottom-0'>
            <div className='d-flex justify-content-between'>
              <div className='mt-2 fs-6'>{formatDate(createdAt)}</div>
              {isAuthor && (
                <div className='mt-1'>
                  <Button onClick={handleShow} variant='light' type='button'>
                    <DeleteIcon />
                  </Button>
                </div>
              )}
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comment;
