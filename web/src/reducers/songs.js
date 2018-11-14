import { SET_SONGS } from '../actions/types';

const songs = (state = {}, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        ...Object.entries(action.songs).reduce((acc, [id, song]) => {
          acc[id] = { ...song, language: action.language };
          return acc;
        }, {}),
      };
    default:
      return state;
  }
};

export default songs;
