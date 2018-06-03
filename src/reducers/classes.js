import { SET_CLASSES, SET_CLASS } from '../actions/types';

const classes = (state = {}, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes;
    case SET_CLASS:
      return { ...state, [action.id]: { title: action.title, language: action.language } };
    default:
      return state;
  }
};

export default classes;
