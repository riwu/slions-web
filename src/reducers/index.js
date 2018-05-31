import { combineReducers } from 'redux';
import user from './user';
import classes from './classes';
import songs from './songs';

const reducer = combineReducers({
  user,
  classes,
  songs,
});

export default reducer;
