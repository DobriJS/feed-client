import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SearchPostBar = () => {
  return (
    <Form>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <Form.Control size='lg' className='mb-2' id='inlineFormInput' placeholder='search....' />
        </Col>

        <Col xs='auto'>
          <Button size='lg' type='submit' variant='dark' className='mb-2'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchPostBar;
