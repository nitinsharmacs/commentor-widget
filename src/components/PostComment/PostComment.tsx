import './PostComment.scss';

import Input from '../Input/Input';
import PostButton from '../PostButton/PostButton';

const PostComment = () => {
  return (
    <section className='post-comment'>
      <Input />
      <PostButton />
    </section>
  );
};

export default PostComment;
