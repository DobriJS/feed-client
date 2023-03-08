import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = () => {
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
                      <Form.Label className='text-center'>Email address</Form.Label>
                      <Form.Control
                        {...register('email', { required: true })}
                        type='email'
                        placeholder='Enter email'
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <p className='text-danger'>Email is required.</p>
                      )}
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        {...register('password', { required: true })}
                        type='password'
                        placeholder='Password'
                      />
                    </Form.Group>
                  </Row>
                  <div className='d-grid'>
                    <Button variant='dark' type='submit'>
                      Login
                    </Button>
                  </div>
                </Form>
                <div className='mt-3'>
                  <p className='mb-0  text-center'>
                    Don't have an account?{' '}
                    <a href="{''}" className='text-dark fw-bold'>
                      Register
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

export default Login;
