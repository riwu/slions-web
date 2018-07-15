import { SET_JOINED_CLASSES, LEAVE_CLASS } from '../actions/types';

const classes = (state = [], action) => {
  switch (action.type) {
    case SET_JOINED_CLASSES:
      return action.classes;
    case LEAVE_CLASS:
      return state.filter(info => info.id !== action.id);
    default:
      return state;
  }
};

export default classes;
