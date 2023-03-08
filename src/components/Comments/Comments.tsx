import CommentItem from '../CommentItem/CommentItem';

const Comments = (props: CommentsProps): JSX.Element => {
  return (
    <section className="comments">
      {props.comments.map(
        (comment): JSX.Element => (
          <CommentItem {...comment} />
        )
      )}
    </section>
  );
};

export default Comments;
