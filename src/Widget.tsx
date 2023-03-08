import Comments from './components/Comments/Comments';
import PostComment from './components/PostComment/PostComment';
import './Widget.scss';

const comments: CommentInfo[] = [
  {
    id: '1212313',
    message:
      'This is awesome. However, I would recommened you to include simple examples beforehand.',
    timestamp: new Date(),
    likes: 2,
    username: 'anyonmous',
  },
  {
    id: '121233',
    message: "Great! Don't forget to include citations to references.",
    timestamp: new Date(),
    likes: 1,
    username: 'anyonmous',
  },
];

const Widget = (): JSX.Element => {
  return (
    <div className="commentor-widget">
      <PostComment />
      <Comments comments={comments} />
    </div>
  );
};

export default Widget;
