import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return comments?.map((comment) => (
    <Comment
      key={comment._id}
      username={comment.postedBy.username}
      pic={comment.postedBy.pic}
      text={comment.text}
      createdAt={comment.createdAt}
      commentId={comment._id}
    />
  ));
};

export default CommentsList;
