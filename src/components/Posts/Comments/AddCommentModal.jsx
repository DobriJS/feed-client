import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { makeComment } from '../../../features/post/postsActions';
import { commentSchemaValidation } from '../../../utils/commentSchemaValidation';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddCommentModal = ({
  showAddCommentModal,
  hideAddCommentModalHandler,
  confirmHideAddCommentModalHandler,
  title,
  postId
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(commentSchemaValidation)
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddComment = (data) => {
    let comment = {
      text: data.text,
      postId
    };
    dispatch(makeComment(comment));
    navigate(`/posts/${postId}`);
    reset();
  };

  return (
    <>
      <Modal show={showAddCommentModal} onHide={hideAddCommentModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleAddComment)}>
            <Form.Group className='mb-3'>
              <FloatingLabel>
                <Form.Control {...register('text')} as='textarea' rows={6} type='text' />
              </FloatingLabel>
              <p className='text-danger'>{errors.text?.message}</p>
            </Form.Group>
            <Button
              className='me-1'
              type='submit'
              variant='dark'
              onClick={confirmHideAddCommentModalHandler}
            >
              Save
            </Button>
            <Button variant='dark' onClick={hideAddCommentModalHandler}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCommentModal;
