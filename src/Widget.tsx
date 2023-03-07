import CommentItem from './components/CommentItem/CommentItem';
import PostComment from './components/PostComment/PostComment';
import './Widget.scss';

const Widget = () => {
  return (
    <div className='commentor-widget'>
      <PostComment />
      <CommentItem />
    </div>
  );
};

export default Widget;
