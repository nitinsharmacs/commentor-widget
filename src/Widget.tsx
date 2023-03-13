import {useReducer, useState} from 'react';
import Comments from './components/Comments/Comments';
import PostComment from './components/PostComment/PostComment';
import './Widget.scss';

enum ACTION {
  ADD_NEW,
}

const commentsData: CommentInfo[] = [
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

interface state {
  comments: CommentInfo[];
}

const initialState: state = {comments: []};

type ACTIONTYPE = {type: ACTION; payload: CommentInfo};

const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): typeof initialState => {
  switch (action.type) {
    case ACTION.ADD_NEW: {
      const comments: CommentInfo[] = [action.payload, ...state.comments];
      return {comments};
    }
    default:
      return state;
  }
};

const Widget = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="commentor-widget">
      <PostComment
        onComment={(comment: string): void => {
          dispatch({
            type: ACTION.ADD_NEW,
            payload: {
              id: '3434',
              message: comment,
              timestamp: new Date(),
              likes: 0,
              username: 'ananymous',
            },
          });
        }}
      />
      <Comments comments={state.comments} />
    </div>
  );
};

export default Widget;
