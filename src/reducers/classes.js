import { SET_CLASSES } from '../actions/types';

const classes = (state = [], action) => {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes;
    default:
      return state;
  }
};

export default classes;
