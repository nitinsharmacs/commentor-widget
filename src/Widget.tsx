import {useCallback, useEffect, useReducer} from 'react';
import API from './api';
import Comments from './components/Comments/Comments';
import PostComment from './components/PostComment/PostComment';
import './Widget.scss';

import {ACTION} from './store/actions';
import reducer from './store/reducer';
import {initialState} from './store/store';
import Heading from './components/Heading/Heading';

const Widget = (props: WidgetProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onCommentHandler = useCallback((comment: string): void => {
    API.add_comment(props.topicId, comment)
      .then(res => {
        dispatch({
          type: ACTION.ADD_NEW,
          payload: [
            {
              id: res['comment-id'],
              message: comment,
              timestamp: new Date(),
              likes: 0,
              username: 'ananymous',
            },
          ],
        });
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    API.fetch_comments(props.topicId).then(({comments}) => {
      dispatch({type: ACTION.STORE, payload: comments});
    });
  }, []);

  return (
    <div className="commentor-widget">
      <Heading text={props.heading} />
      <PostComment onComment={onCommentHandler} />
      <Comments comments={state.comments} />
    </div>
  );
};

export default Widget;
