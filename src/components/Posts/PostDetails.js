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
import LoadingSpinner from '../Spinner/LoadingSpinner';

const PostDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { userInfo, userToken } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.posts);
  const post = useSelector(selectPostById(id));

  const comments = post?.comments?.map((comment) => {
    return {
      ...comment
    };
  });

  const [showModal, setShowModal] = useState(false);
  const openDeleteModalHandler = () => setShowModal(true);
  const hideDeleteModalHandler = () => setShowModal(false);

  const [showAddCommentModal, setShowAddCommentModal] = useState(false);
  const openAddCommentModalHandler = () => setShowAddCommentModal(true);
  const hideAddCommentModalHandler = () => setShowAddCommentModal(false);

  const onEditClick = () => navigate(`/edit-post/${post._id}`);
  const handlePostLike = () => dispatch(likePost(post._id));

  const confirmDeleteModalHandler = () => {
    dispatch(deletePost(post._id));
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      <DeletePostConfirmation
        showModal={showModal}
        loading={loading}
        hideDeleteModalHandler={hideDeleteModalHandler}
        confirmDeleteModalHandler={confirmDeleteModalHandler}
      />

      <AddCommentModal
        showAddCommentModal={showAddCommentModal}
        hideAddCommentModalHandler={hideAddCommentModalHandler}
        confirmHideAddCommentModalHandler={hideAddCommentModalHandler}
        postId={post?._id}
        loading={loading}
      />

      <Container>
        <Row>
          <Col className='col-md-8 offset-md-2'>
            {!post ? (
              <LoadingSpinner />
            ) : (
              <>
                <Card className='text-center mt-2 mb-1' bg='dark' text='light'>
                  <Image fluid alt='post image' src={post?.image} />
                  <Card.Body>
                    <Card.Title className='fs-3'>{post?.title}</Card.Title>
                    <Card.Text className='fs-5'>{post?.body}</Card.Text>

                    <PostInteractionButtons
                      userToken={userToken}
                      handlePostLike={handlePostLike}
                      openAddCommentModalHandler={openAddCommentModalHandler}
                      likes={post?.likes?.length}
                      postId={post?._id}
                    />

                    <PostAuthorInteractionButtons
                      isAuthor={userInfo?._id === post?.postedBy?._id}
                      onEditClick={onEditClick}
                      openDeleteModalHandler={openDeleteModalHandler}
                    />
                  </Card.Body>
                  <Card.Footer className='border-white border-top-3 border-bottom-0'>
                    {formatDate(post?.createdAt)}
                  </Card.Footer>
                </Card>

                <CommentsList comments={comments} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostDetails;
