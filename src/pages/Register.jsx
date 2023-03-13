import { useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
    if (userInfo) navigate('/profile');
    if (success) navigate('/login');
  }, [navigate, userInfo, success]);

  const onSubmit = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <Container>
      <Row className='vh-100 d-flex justify-content-center align-items-center'>
        {error && <Alert variant='danger'>{error}</Alert>}
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
                      {loading ? <Spinner variant='dark' /> : 'Register'}
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
