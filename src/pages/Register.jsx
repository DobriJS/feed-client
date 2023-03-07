import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm();
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
                        {...register('username')}
                        type='text'
                        placeholder='Enter username'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control {...register('email')} type='email' placeholder='Enter email' />
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
                        {...register('password')}
                        type='password'
                        placeholder='Enter password'
                      />
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
