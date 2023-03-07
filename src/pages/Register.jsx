import { useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authActions';

const Register = () => {
  const { loading, userInfo, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login');
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/profile');
  }, [navigate, userInfo, success]);

  const onSubmit = (data) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <Container>
      <Row className='vh-100 d-flex justify-content-center align-items-center'>
        <Col md={10} lg={8} xs={12}>
          <Card className='shadow'>
            <Card.Body>
              <div className='mb-3 mt-4'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row className='mb-3'>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-center'>Username</Form.Label>
                      <Form.Control
                        {...register('username', {
                          required: 'Username is required',
                          maxLength: 20
                        })}
                        isInvalid={errors.username ? 'true' : 'false'}
                        type='text'
                        placeholder='Enter username'
                      />
                      {errors.username && (
                        <Form.Text className='text-danger'>{errors.username.message}</Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        {...register('email', { required: 'Email is required', maxLength: 20 })}
                        isInvalid={errors.email ? 'true' : 'false'}
                        type='email'
                        placeholder='Enter email'
                      />
                      {errors.email && (
                        <Form.Text className='text-danger'>{errors.email.message}</Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Picture</Form.Label>
                      <Form.Control
                        {...register('picture')}
                        type='text'
                        placeholder='Your profile picture'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        {...register('password', {
                          required: 'Password is required',
                          maxLength: 20
                        })}
                        isInvalid={errors.password ? 'true' : 'false'}
                        type='password'
                        placeholder='Enter password'
                      />
                      {errors.password && (
                        <Form.Text className='text-danger'>{errors.password.message}</Form.Text>
                      )}
                    </Form.Group>
                  </Row>
                  <div className='d-grid'>
                    <Button variant='dark' type='submit' disabled={loading}>
                      Register
                    </Button>
                  </div>
                </Form>
                <div className='mt-3'>
                  <p className='mb-0  text-center'>
                    Already have an account?{' '}
                    <a href="{''}" className='text-dark fw-bold'>
                      Login
                    </a>
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
