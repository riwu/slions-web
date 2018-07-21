import { SET_JOINED_CLASSES, LEAVE_CLASS, LOG_OUT } from '../actions/types';

const initialState = [];

const classes = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOINED_CLASSES:
      return action.classes;
    case LEAVE_CLASS:
      return state.filter(info => info.id !== action.id);
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default classes;
