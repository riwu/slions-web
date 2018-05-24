import { SET_RECORDINGS } from '../actions/types';

const recordings = (state = [], action) => {
  switch (action.type) {
    case SET_RECORDINGS:
      return action.recordings;
    default:
      return state;
  }
};

export default recordings;
