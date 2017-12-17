import { combineReducers } from 'redux';
import columnsReducer from './columns/reducers';


export default combineReducers({
  columns: columnsReducer,
});
