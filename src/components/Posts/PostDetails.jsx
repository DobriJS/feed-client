import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../features/post/postsActions';
import { selectPostById } from '../../features/post/postsSlice';
import { formatDate } from '../../utils/dateFormatter';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import DeletePostConfirmation from './DeletePostConfirmation';
import PostInteractionButtons from '../Buttons/PostInteractionButtons';
import PostAuthorInteractionButtons from '../Buttons/PostAuthorInteractionButtons';
import AddCommentModal from './Comments/AddCommentModal';
import CommentsList from './Comments/CommentsList';

const PostDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);

  const post = useSelector(selectPostById(id));

  const comments = post?.comments?.map((comment) => {
    return {
      text: comment?.text,
      username: comment?.postedBy?.username,
      pic: comment?.postedBy?.pic,
      createdAt: comment.createdAt,
      id: comment._id
    };
  });

  const { userInfo, isLoggedIn } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.posts);

  const isAuthor = userInfo?._id === post?.postedBy?._id;

  const onEditClick = () => navigate(`/edit-post/${post._id}`);

  const openDeleteModalHandler = () => setShowModal(true);
  const hideDeleteModalHandler = () => setShowModal(false);

  const confirmDeleteModalHandler = () => {
    dispatch(deletePost(post._id));
    setShowModal(false);
    navigate('/');
  };

  const openAddCommentModalHandler = () => setShowAddCommentModal(true);
  const hideAddCommentModalHandler = () => setShowAddCommentModal(false);

  const handlePostLike = () => dispatch(likePost(post._id));

  return (
    <>
      <DeletePostConfirmation
        title='Delete Confirmation!'
        body='Are sure to delete this item'
        showModal={showModal}
        apiStatus={status}
        hideDeleteModalHandler={hideDeleteModalHandler}
        confirmDeleteModalHandler={confirmDeleteModalHandler}
      />

      <AddCommentModal
        title='Add your comment'
        showAddCommentModal={showAddCommentModal}
        hideAddCommentModalHandler={hideAddCommentModalHandler}
        confirmHideAddCommentModalHandler={hideAddCommentModalHandler}
        postId={post?._id}
      />

      <Container>
        <Card className='text-center mt-2' bg='dark' text='light'>
          <Card.Img variant='top' src={post?.image} />
          <Card.Body>
            <Card.Title>{post?.title}</Card.Title>
            <Card.Text>{post?.body}</Card.Text>

            <PostInteractionButtons
              isLoggedIn={isLoggedIn}
              handlePostLike={handlePostLike}
              openAddCommentModalHandler={openAddCommentModalHandler}
              likes={post?.likes?.length}
              postId={post?._id}
            />

            <PostAuthorInteractionButtons
              isAuthor={isAuthor}
              onEditClick={onEditClick}
              openDeleteModalHandler={openDeleteModalHandler}
            />
          </Card.Body>
          <Card.Footer>{formatDate(post?.createdAt)}</Card.Footer>
        </Card>

        <CommentsList comments={comments} />
      </Container>
    </>
  );
};

export default PostDetails;
