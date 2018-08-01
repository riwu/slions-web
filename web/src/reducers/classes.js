import {
  SET_CLASSES,
  SET_CLASS,
  REMOVE_FROM_CLASS,
  DELETE_USER_DATA,
  UPDATE_CLASS_SONGS,
  PROMOTE_TO_TEACHER,
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
      const { [action.studentId]: student, ...students } = state[action.classId].students;
      const { [action.studentId]: teacher, ...teachers } = state[action.classId].teachers;
      return {
        ...state,
        [action.classId]: {
          ...state[action.classId],
          students,
          teachers,
        },
      };
    }
    case PROMOTE_TO_TEACHER: {
      const { [action.studentId]: student, ...students } = state[action.classId].students;
      return {
        ...state,
        [action.classId]: {
          ...state[action.classId],
          students,
          teachers: {
            ...state[action.classId].teachers,
            [action.studentId]: {
              username: student.username,
              email: student.email,
            },
          },
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
