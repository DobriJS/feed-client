import Comment from './Comment';
import { formatDate } from '../../../utils/dateFormatter';

const CommentsList = ({ comments }) => {
  return comments?.map((comment) => (
    <Comment
      key={comment.id}
      username={comment.username}
      pic={comment.pic}
      text={comment.text}
      dateOfcreation={formatDate(comment.createdAt)}
    />
  ));
};

export default CommentsList;
