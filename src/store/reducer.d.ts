import { ACTIONTYPE } from './actions';
import { widgetState, initialState } from './store';
declare const reducer: (state: widgetState | undefined, action: ACTIONTYPE) => typeof initialState;
export default reducer;
