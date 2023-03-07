import './CommentItem.scss';

import LikeButton from '../LikeButton/LikeButton';
import ReplyButton from '../ReplyButton/ReplyButton';

const avatarImage =
  'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png';

const CommentItem = () => {
  return (
    <div className='comment-item'>
      <section className='comment-item-header'>
        <section className='comment-author'>
          <section className='author-avatar'>
            <img src={avatarImage} alt='comment-author-avatar' />
          </section>
          <section className='comment-author-id'>
            <p>anyonmous</p>
          </section>
        </section>
        <section className='comment-timestamp'>2 min ago</section>
      </section>
      <section className='comment-item-content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          molestiae magni delectus, placeat nisi obcaecati dolorem modi, ipsam
          possimus, libero quasi corporis ut dicta. Corporis similique labore
          quisquam ex adipisci.
        </p>
      </section>
      <section className='comment-item-controls'>
        <LikeButton />
        <ReplyButton />
      </section>
    </div>
  );
};

export default CommentItem;
