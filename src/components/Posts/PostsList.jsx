import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Post from './Post';

const PostsList = ({ posts }) => {
  return (
    <Container fluid className='mt-1 mb-2'>
      <Row xs={1} md={3} className='g-2'>
        {posts &&
          posts.map((post) => (
            <Col key={post?._id}>
              <Link to={`/posts/${post?._id}`} style={{ textDecoration: 'none' }}>
                <Post
                  title={post?.title}
                  body={post?.body}
                  image={post?.image}
                  author={post?.postedBy.username}
                />
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default PostsList;
