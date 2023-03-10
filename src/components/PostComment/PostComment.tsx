import './PostComment.scss';

import Input from '../Input/Input';
import PostButton from '../PostButton/PostButton';
import {useRef, useCallback, useState} from 'react';

const PostComment = (props: PostCommentProps): JSX.Element => {
  const [comment, setComment] = useState('');
  const ref = useRef<CanClearInput>(null);

  const commentHandler = useCallback((comment: string) => {
    setComment(comment);
  }, []);

  return (
    <div className="post-comment">
      <Input
        ref={ref}
        placeholder="What's on your mind?"
        onChange={commentHandler}
      />
      <PostButton
        onPost={() => {
          if (ref.current) ref.current.clear();
        }}
      />
    </div>
  );
};

export default PostComment;
