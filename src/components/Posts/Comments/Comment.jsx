import Card from 'react-bootstrap/Card';

const Comment = ({ pic, username, text, dateOfcreation }) => {
  return (
    <Card className='mt-1' bg='dark' text='light'>
      <Card.Header>
        <img
          className='rounded-circle shadow-1-strong me-3'
          src={pic}
          alt='avatar'
          width='60'
          height='60'
        />
        <span className='fw-bold'>{username}</span>
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <div className='text-center'>
          <Card.Footer as='span'>{dateOfcreation}</Card.Footer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comment;
