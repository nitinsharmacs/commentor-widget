import CommentItem from '../CommentItem/CommentItem';
import './Comments.scss';

const Comments = (props: CommentsProps): JSX.Element => {
  return (
    <section className="comments">
      {props.comments.map(
        (comment): JSX.Element => (
          <CommentItem key={comment.id} {...comment} />
        )
      )}
    </section>
  );
};

export default Comments;
