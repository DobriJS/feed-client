import Comment from './Comment';
import { useSelector } from 'react-redux';

import { formatDate } from '../../../utils/dateFormatter';

const CommentsList = ({ comments }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return comments?.map((comment) => (
    <Comment
      key={comment.id}
      username={comment.username}
      pic={comment.pic}
      text={comment.text}
      dateOfcreation={formatDate(comment.createdAt)}
      isCommentAuthor={userInfo?.username === comment.username}
    />
  ));
};

export default CommentsList;
