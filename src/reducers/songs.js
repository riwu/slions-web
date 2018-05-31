import { SET_SONGS } from '../actions/types';

const songs = (state = {}, action) => {
  switch (action.type) {
    case SET_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default songs;
