import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../features/auth/authActions';
import { userRegistrationSchema } from '../utils/userSchemaValidation';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {
  const { loading, userInfo, error, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(userRegistrationSchema)
  });

  useEffect(() => {
    if (userInfo) navigate('/profile');
    if (success) navigate('/login');
  }, [navigate, userInfo, success]);

  const onSubmit = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    reset();
  };

  return (
    <Container>
      <Row className='vh-100 d-flex justify-content-center align-items-center'>
        <Col md={10} lg={8} xs={12}>
          <Card className='shadow'>
            <Card.Body>
              <div className='mb-3 mt-4'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <Row className='mb-3'>
                    <Form.Group className='mb-3'>
                      <FloatingLabel label='Username'>
                        <Form.Control {...register('username')} type='text' />
                      </FloatingLabel>
                      <p className='text-danger'>{errors.username?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <FloatingLabel label='Email'>
                        <Form.Control {...register('email')} type='email' />
                      </FloatingLabel>
                      <p className='text-danger'>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <FloatingLabel label='Picture'>
                        <Form.Control {...register('picture')} type='text' />
                      </FloatingLabel>
                      <p className='text-danger'>{errors.picture?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <FloatingLabel label='Password'>
                        <Form.Control {...register('password')} type='password' />
                      </FloatingLabel>
                      <p className='text-danger'>{errors.password?.message}</p>
                    </Form.Group>
                  </Row>
                  <div className='d-grid'>
                    <Button variant='dark' type='submit' disabled={loading}>
                      {loading ? (
                        <>
                          <Spinner
                            variant='dark'
                            as='span'
                            animation='border'
                            role='status'
                            aria-hidden='true'
                          />
                          <span className='visually-hidden'>Loading...</span>
                        </>
                      ) : (
                        'Register'
                      )}
                    </Button>
                  </div>
                </Form>
                <div className='mt-3'>
                  <p className='mb-0  text-center'>
                    Already have an account?{' '}
                    <Link to={'/login'} className='text-dark fw-bold'>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
