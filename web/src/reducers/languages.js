import { SET_LANGUAGES } from '../actions/types';

const songs = (state = {}, action) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return action.languages;
    default:
      return state;
  }
};

export default songs;
