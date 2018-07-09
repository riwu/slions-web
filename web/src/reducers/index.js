import { combineReducers } from 'redux';
import user from './user';
import classes from './classes';
import songs from './songs';
import languages from './languages';

const reducer = combineReducers({
  user,
  classes,
  songs,
  languages,
});

export default reducer;
