import './CommentItem.scss';

import LikeButton from '../LikeButton/LikeButton';
import ReplyButton from '../ReplyButton/ReplyButton';

const avatarImage =
  'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png';

const CommentItem = (props: CommentInfo): JSX.Element => {
  return (
    <div className="comment-item">
      <section className="comment-item-header">
        <section className="comment-author">
          <section className="author-avatar">
            <img src={avatarImage} alt="comment-author-avatar" />
          </section>
          <section className="comment-author-username">
            <p>{props.username}</p>
          </section>
        </section>
        <section className="comment-timestamp">2 min ago</section>
      </section>
      <section className="comment-item-content">
        <p>{props.message}</p>
      </section>
      <section className="comment-item-controls">
        <LikeButton likes={props.likes} />
        <ReplyButton />
      </section>
    </div>
  );
};

export default CommentItem;
