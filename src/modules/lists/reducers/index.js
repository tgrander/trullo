import { combineReducers } from 'redux';
import allIds from './allIds';
import byId from './byId';
import newList from './newList';

const lists = combineReducers({
  allIds,
  byId,
  newList,
});

export default lists;
