import { SET_SONGS } from '../actions/types';

const songs = (state = {}, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        [action.language]: action.songs,
      };
    default:
      return state;
  }
};

export default songs;
