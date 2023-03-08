import './PostComment.scss';

import Input from '../Input/Input';
import PostButton from '../PostButton/PostButton';
import {useCallback, useState} from 'react';

const PostComment = (): JSX.Element => {
  const [comment, setComment] = useState('');
  const commentHandler = useCallback((comment: string) => {
    setComment(comment);
  }, []);

  return (
    <div className="post-comment">
      <Input placeholder="What's on your mind?" onChange={commentHandler} />
      <PostButton
        onPost={() => {
          alert(comment);
        }}
      />
    </div>
  );
};

export default PostComment;
