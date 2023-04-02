import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPostComments } from '../../../features/post/postsSlice';
import { fetchPostComments } from '../../../features/post/postsActions';

import CommentsList from './CommentsList';
import Container from 'react-bootstrap/Container';

const CommentsSection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const postComments = useSelector(selectPostComments);

  const commentsData = postComments.comments;

  useEffect(() => {
    dispatch(fetchPostComments(params.id));
  }, []);

  return (
    <Container>
      <CommentsList comments={commentsData} />
    </Container>
  );
};

export default CommentsSection;
