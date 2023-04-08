import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../features/post/postsActions';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSchemaValidation } from '../../utils/postSchemaValidation';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const CreatePost = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(postSchemaValidation)
  });

  const { loading } = useSelector((state) => state.posts);

  const handleCreatePost = (data) => {
    let newPost = {
      title: data.title,
      body: data.body,
      image: data.image
    };
    disptach(createPost(newPost));
    navigate('/');
  };

  return (
    <Container className='mt-2'>
      <div className='text-center'>
        <legend>Create A New Post</legend>
      </div>
      <Row>
        <Col className='col-md-8 offset-md-2'>
          <Form onSubmit={handleSubmit(handleCreatePost)}>
            <Form.Group className='mb-3' controlId='formTitle'>
              <FloatingLabel label='Title'>
                <Form.Control {...register('title')} type='text' />
              </FloatingLabel>
              <p className='text-danger'>{errors.title?.message}</p>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBody'>
              <FloatingLabel label='Body'>
                <Form.Control {...register('body')} type='text' />
                <p className='text-danger'>{errors.body?.message}</p>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formImage'>
              <FloatingLabel label='Image'>
                <Form.Control {...register('image')} type='text' />
              </FloatingLabel>
              <p className='text-danger'>{errors.image?.message}</p>
            </Form.Group>

            <div className='d-grid gap-1'>
              <Button variant='dark' type='submit' disabled={loading}>
                Save
              </Button>
              <Button onClick={() => navigate('/')} variant='dark'>
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePost;
