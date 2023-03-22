import CommentItem from '../CommentItem/CommentItem';
import './Comments.scss';

const Comments = (props: CommentsProps): JSX.Element => {
  return (
    <section className="comments">
      {props.comments.map(
        (comment, index): JSX.Element => (
          <CommentItem key={comment.id + index} {...comment} />
        )
      )}
    </section>
  );
};

export default Comments;
