import { combineReducers } from 'redux';
import listsReducer from './lists/reducers';


export default combineReducers({
  lists: listsReducer,
});
