import { combineReducers } from 'redux';
import cards from './cards/reducers/';
import lists from './lists/reducers/';

export default combineReducers({
  cards,
  lists,
});
