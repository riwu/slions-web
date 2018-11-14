import { combineReducers } from 'redux';
import user from './user';
import classes from './classes';
import joinedClasses from './joinedClasses';
import songs from './songs';
import languages from './languages';
import users from './users';

const reducer = combineReducers({
  user,
  classes,
  joinedClasses,
  songs,
  languages,
  users,
});

export default reducer;
