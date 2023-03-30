import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../features/post/postsSlice';

import AddPostButton from '../Buttons/AddPostButton';
import PostsList from './PostsList';
import LoadingSpinner from '../Spinner/LoadingSpinner';

const PostsContainer = () => {
  const posts = useSelector(selectAllPosts);
  const { status } = useSelector((state) => state.posts);
  console.log(posts);
  let contentToRender = '';

  contentToRender =
    status === 'pending' ? (
      <>
        <LoadingSpinner />
      </>
    ) : Array.isArray(posts) && posts.length > 0 ? (
      <>
        <AddPostButton />
        <PostsList posts={posts} />
      </>
    ) : (
      <p>No posts found.</p>
    );

  return <>{contentToRender}</>;
};

export default PostsContainer;
