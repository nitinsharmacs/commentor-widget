import {ACTION, ACTIONTYPE} from './actions';
import {widgetState, initialState} from './store';

const reducer = (
  state: widgetState = initialState,
  action: ACTIONTYPE
): typeof initialState => {
  switch (action.type) {
    case ACTION.ADD_NEW: {
      const comments: CommentInfo[] = [...action.payload, ...state.comments];
      return {comments};
    }
    case ACTION.STORE: {
      return {comments: action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
