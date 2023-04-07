import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectPostById } from '../../features/post/postsSlice';
import { updatePost } from '../../features/post/postsActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSchemaValidation } from '../../utils/postSchemaValidation';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const post = useSelector(selectPostById(id));
  const { loading } = useSelector((state) => state.posts);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(postSchemaValidation),
    defaultValues: {
      title: post?.title,
      body: post?.body,
      image: post?.image
    }
  });

  const updatePostForm = (data) => {
    let updatedPostData = {
      _id: id,
      title: data.title,
      body: data.body,
      image: data.image
    };
    dispatch(updatePost(updatedPostData));
    navigate(`/posts/${post._id}`);
  };

  const cancelUpdatePost = () => navigate(`/posts/${post._id}`);

  return (
    <Container className='mt-2'>
      <div className='text-center'>
        <legend>Update Post</legend>
      </div>
      <Row>
        <Col className='col-md-8 offset-md-2'>
          <Form onSubmit={handleSubmit(updatePostForm)}>
            <Form.Group className='mb-3' controlId='formTitle'>
              <Controller
                required={true}
                control={control}
                name='title'
                render={({ field }) => (
                  <FloatingLabel label='Title'>
                    <Form.Control type='text' {...field} />
                  </FloatingLabel>
                )}
              />
              <p className='text-danger'>{errors.title?.message}</p>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBody'>
              <Controller
                required={true}
                control={control}
                name='body'
                render={({ field }) => (
                  <FloatingLabel label='Body'>
                    <Form.Control type='text' {...field} />
                  </FloatingLabel>
                )}
              />
              <p className='text-danger'>{errors.body?.message}</p>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formImage'>
              <Controller
                control={control}
                name='image'
                render={({ field }) => (
                  <FloatingLabel label='Image'>
                    <Form.Control type='text' {...field} />
                  </FloatingLabel>
                )}
              />
              <p className='text-danger'>{errors.image?.message}</p>
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button variant='dark' type='submit' disabled={loading}>
                Edit
              </Button>
              <Button onClick={cancelUpdatePost} variant='dark'>
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPost;
