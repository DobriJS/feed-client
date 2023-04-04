import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../features/post/postsSlice';

import CreatePostButton from '../Buttons/CreatePostButton';
import PostsList from './PostsList';
import SearchPostBar from './SearchPostBar';
import LoadingSpinner from '../Spinner/LoadingSpinner';

const PostsContainer = () => {
  const posts = useSelector(selectAllPosts);
  const { status } = useSelector((state) => state.posts);

  let contentToRender = '';

  contentToRender =
    status === 'pending' ? (
      <div className='mt-2'>
        <LoadingSpinner />
      </div>
    ) : Array.isArray(posts) && posts.length > 0 ? (
      <>
        <CreatePostButton />
        <SearchPostBar />
        <PostsList posts={posts} />
      </>
    ) : (
      <p>No posts found.</p>
    );

  return <>{contentToRender}</>;
};

export default PostsContainer;
