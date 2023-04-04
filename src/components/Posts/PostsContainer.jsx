import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../features/post/postsSlice';

import CreatePostButton from '../Buttons/CreatePostButton';
import PostsList from './PostsList';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PostsContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = useSelector(selectAllPosts);
  const { status } = useSelector((state) => state.posts);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-1'>
        <CreatePostButton />
        <Form>
          <Row className='justify-content-center'>
            <Col xs='auto'>
              <Form.Control
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type='text'
                className='ms-1'
                size='lg'
                placeholder='Search ...'
              />
            </Col>
          </Row>
        </Form>
      </div>
      {status === 'pending' ? (
        <LoadingSpinner />
      ) : (
        <PostsList posts={filteredPosts.length > 0 ? filteredPosts : posts} />
      )}
    </>
  );
};

export default PostsContainer;
