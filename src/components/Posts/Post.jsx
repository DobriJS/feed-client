import Card from 'react-bootstrap/Card';

const Post = ({ image, title, body, author }) => {
  return (
    <Card className='text-center h-100' bg='dark' text='light' style={{ cursor: 'pointer' }}>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title className='fs-4'>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Author: {author}</small>
      </Card.Footer>
    </Card>
  );
};

export default Post;
