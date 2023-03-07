import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                        type='password'
                        placeholder='Enter password'
                      />
                      {errors.password && (
                        <Form.Text className='text-danger'>{errors.password.message}</Form.Text>
                      )}
                    </Form.Group>
                  </Row>
                  <div className='d-grid'>
                    <Button variant='dark' type='submit'>
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
