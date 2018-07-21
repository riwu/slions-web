import { SET_CLASSES, SET_CLASS, REMOVE_FROM_CLASS, LOG_OUT } from '../actions/types';

const initialState = {};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes;
    case SET_CLASS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.data,
        },
      };
    case REMOVE_FROM_CLASS: {
      const { [action.studentId]: _, ...students } = state[action.classId].students;
      return {
        ...state,
        [action.classId]: {
          ...state[action.classId],
          students,
        },
      };
    }
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default classes;
