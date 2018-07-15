import { SET_JOINED_CLASSES } from '../actions/types';

const classes = (state = [], action) => {
  switch (action.type) {
    case SET_JOINED_CLASSES:
      return action.classes;
    default:
      return state;
  }
};

export default classes;
