import * as api from './api';
import * as types from './types';

export const login = (username, password) => dispatch =>
  api.login(username, password).then(({ user }) =>
    dispatch({
      type: types.SET_USER,
      user: {
        username: user.username,
        isAdmin: user.isAdmin,
      },
    }));

export const getClasses = () => dispatch =>
  api.getClasses().then(classes =>
    dispatch({
      type: types.SET_CLASSES,
      classes,
    }));

export const getJoinedClasses = () => dispatch =>
  api.getJoinedClasses().then(classes =>
    dispatch({
      type: types.SET_JOINED_CLASSES,
      classes,
    }));

export const getSongs = language => dispatch =>
  api.getSongs(language).then(songs =>
    dispatch({
      type: types.SET_SONGS,
      songs,
      language,
    }));

export const createClass = data => dispatch =>
  api.createClass(data).then(({ id }) =>
    dispatch({
      type: types.SET_CLASS,
      id,
      data: { ...data, createdOn: new Date() },
    }));

export const updateClass = ({ id, ...data }) => dispatch =>
  api.updateClass(id, data).then(() =>
    dispatch({
      type: types.SET_CLASS,
      id,
      data,
    }));

export const getLanguages = () => dispatch =>
  api.getLanguages().then(languages =>
    dispatch({
      type: types.SET_LANGUAGES,
      languages,
    }));

export const leaveClass = id => dispatch =>
  api.leaveClass(id).then(() =>
    dispatch({
      type: types.LEAVE_CLASS,
      id,
    }));

export const removeFromClass = (classId, studentId) => dispatch =>
  api.removeFromClass(classId, studentId).then(() =>
    dispatch({
      type: types.REMOVE_FROM_CLASS,
      classId,
      studentId,
    }));

export const clearUserData = () => ({
  type: types.DELETE_USER_DATA,
});

export const logOut = () => (dispatch) => {
  // log out even if session deletion fails
  dispatch({
    type: types.DELETE_USER_DATA,
  });
  api.deleteSession();
};
