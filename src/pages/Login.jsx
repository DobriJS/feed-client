import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../features/auth/authActions';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const { loading, userInfo, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const onSubmit = (data) => dispatch(userLogin(data));

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
                      <FloatingLabel label='Email'>
                        <Form.Control {...register('email', { required: true })} type='email' />
                      </FloatingLabel>
                      {errors.email && errors.email.type === 'required' && (
                        <p className='text-danger'>Email is required.</p>
                      )}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <FloatingLabel label='Password'>
                        <Form.Control
                          {...register('password', { required: true })}
                          type='password'
                        />
                      </FloatingLabel>
                      {errors.password && errors.password.type === 'required' && (
                        <p className='text-danger'>Password is required.</p>
                      )}
                    </Form.Group>
                  </Row>
                  <div className='d-grid'>
                    <Button variant='dark' type='submit' disabled={loading}>
                      {loading ? <Spinner variant='dark' /> : 'Login'}
                    </Button>
                  </div>
                </Form>
                <div className='mt-3'>
                  <p className='mb-0  text-center'>
                    Don't have an account?{' '}
                    <Link to={'/register'} className='text-dark fw-bold'>
                      Register
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

export default Login;
