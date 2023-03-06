import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

const Register = () => {
  return (
    <Container>
      <Row className='vh-100 d-flex justify-content-center align-items-center'>
        <Col md={10} lg={8} xs={12}>
          <Card className='shadow'>
            <Card.Body>
              <div className='mb-3 mt-4'>
                <Form>
                  <Row className='mb-3'>
                    <Form.Group className='mb-3' controlId='formUsername'>
                      <Form.Label className='text-center'>Username</Form.Label>
                      <Form.Control type='email' placeholder='Enter username' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Enter password' />
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
