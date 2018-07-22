import {
  SET_CLASSES,
  SET_CLASS,
  REMOVE_FROM_CLASS,
  DELETE_USER_DATA,
  UPDATE_CLASS_SONGS,
} from '../actions/types';

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
    case UPDATE_CLASS_SONGS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          students: Object.entries(state[action.id].students).reduce((acc, [id, student]) => {
            acc[id] = {
              ...student,
              songs: {
                ...Object.keys(action.songs).reduce((accumulator, songId) => {
                  accumulator[songId] = student.songs[songId] || {};
                  return accumulator;
                }, {}),
                ...action.addedSongsData[id],
              },
            };
            return acc;
          }, {}),
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
    case DELETE_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default classes;
