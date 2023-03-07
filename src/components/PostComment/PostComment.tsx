import './PostComment.scss';

import Input from '../Input/Input';
import PostButton from '../PostButton/PostButton';

const PostComment = () => {
  return (
    <div className='post-comment'>
      <Input />
      <PostButton />
    </div>
  );
};

export default PostComment;
