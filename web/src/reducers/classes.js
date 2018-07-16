import { SET_CLASSES, SET_CLASS, REMOVE_FROM_CLASS } from '../actions/types';

const classes = (state = {}, action) => {
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
    default:
      return state;
  }
};

export default classes;
