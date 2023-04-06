import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../features/post/postsActions';
import { selectPostById } from '../../features/post/postsSlice';
import { formatDate } from '../../utils/dateFormatter';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeletePostConfirmation from './DeletePostConfirmation';
import PostInteractionButtons from '../Buttons/PostInteractionButtons';
import PostAuthorInteractionButtons from '../Buttons/PostAuthorInteractionButtons';
import AddCommentModal from './Comments/AddCommentModal';

import CommentsList from './Comments/CommentsList';

const PostDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { status } = useSelector((state) => state.posts);
  const post = useSelector(selectPostById(id));

  const comments = post?.comments?.map((comment) => {
    return {
      ...comment
    };
  });

  const { userInfo, isLoggedIn } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(false);
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);

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
        <Row>
          <Col className='col-md-8 offset-md-2'>
            <Card className='text-center mt-2 mb-1' bg='dark' text='light'>
              <Image fluid alt='post image' src={post?.image} />
              <Card.Body>
                <Card.Title className='fs-3'>{post?.title}</Card.Title>
                <Card.Text className='fs-5'>{post?.body}</Card.Text>

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
              <Card.Footer className='border-white border-top-3 border-bottom-0'>
                {formatDate(post?.createdAt)}
              </Card.Footer>
            </Card>

            <CommentsList comments={comments} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostDetails;