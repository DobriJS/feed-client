import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <Container>
      <Row className='vh-100 d-flex justify-content-center align-items-center'>
        <Col md={10} lg={8} xs={12}>
          <Card className='shadow'>
            <Card.Body>
              <div className='mb-3 mt-4'>
                <Form>
                  <Row className='mb-3'>
                    <Form.Group className='mb-3' controlId='formEmail'>
                      <Form.Label className='text-center'>Email address</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Password' />
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
