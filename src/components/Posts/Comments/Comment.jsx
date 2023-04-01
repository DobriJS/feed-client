import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { DeleteIcon } from '../../../utils/Icons';

const Comment = ({ pic, username, text, dateOfcreation, isCommentAuthor }) => {
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
        <Card.Footer>
          <div className='d-flex justify-content-between'>
            <span>{dateOfcreation}</span>
            {isCommentAuthor && (
              <span>
                <Button variant='light' type='button'>
                  <DeleteIcon />
                </Button>
              </span>
            )}
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Comment;
