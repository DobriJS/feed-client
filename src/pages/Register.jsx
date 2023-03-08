import { useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert } from 'react-bootstrap';
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
                          required: true,
                          minLength: 3
                        })}
                        type='text'
                        placeholder='Enter username'
                      />
                      {errors.username && errors.username.type === 'required' && (
                        <p className='text-danger'>Username is required.</p>
                      )}
                      {errors.username && errors.username.type === 'minLength' && (
                        <p className='errorMsg'>Username should be at-least 3 characters.</p>
                      )}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        {...register('email', {
                          required: true,
                          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                        type='email'
                        placeholder='Enter email'
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <p className='text-danger'>Email is required.</p>
                      )}
                      {errors.email && errors.email.type === 'pattern' && (
                        <p className='text-danger'>Email is not valid.</p>
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
                          required: true,
                          minLength: 3
                        })}
                        type='password'
                        placeholder='Enter password'
                      />
                      {errors.password && errors.password.type === 'required' && (
                        <p className='text-danger'>Password is required.</p>
                      )}
                      {errors.password && errors.password.type === 'minLength' && (
                        <p className='text-danger'>Password should be at-least 3 characters.</p>
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
