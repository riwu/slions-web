import { combineReducers } from 'redux';
import user from './user';
import classes from './classes';

const reducer = combineReducers({
  user,
  classes,
});

export default reducer;
