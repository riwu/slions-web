import { notification } from 'antd';
import * as api from './api';
import * as types from './types';

const displayError = (e, title) => {
  if (((e || {}).response || {}).status === 401) {
    // error already shown through handleSessionExpired
    return;
  }
  notification.error({ message: title, description: e.message });
};

export const getClasses = () => dispatch =>
  api
    .getClasses()
    .then(classes =>
      dispatch({
        type: types.SET_CLASSES,
        classes,
      }))
    .catch(e => displayError(e, 'Failed to retrieve updated classes'));

export const getJoinedClasses = () => dispatch =>
  api
    .getJoinedClasses()
    .then(classes =>
      dispatch({
        type: types.SET_JOINED_CLASSES,
        classes,
      }))
    .catch(e => displayError(e, 'Failed to retrieve updated classes'));

export const getSongs = language => dispatch =>
  api
    .getSongs(language)
    .then(songs =>
      dispatch({
        type: types.SET_SONGS,
        songs,
        language,
      }))
    .catch(e => displayError(e, 'Failed to retrieve updated songs'));

export const createClass = data => dispatch =>
  api.createClass(data).then(({ id }) =>
    dispatch({
      type: types.SET_CLASS,
      id,
      data: { ...data, teachers: {}, inserted: new Date() },
    }));

export const updateClass = ({ id, ...data }) => (dispatch, getState) => {
  const {
    classes: {
      [id]: { songs: currentSongs },
    },
  } = getState();

  const addedSongs = Object.keys(data.songs).filter(songId => currentSongs[songId] === undefined);
  const getNewSongs = addedSongs.length
    ? api.getRecordings(id, addedSongs.join(','))
    : Promise.resolve({});
  getNewSongs
    .then(addedSongsData =>
      dispatch({
        type: types.UPDATE_CLASS_SONGS,
        id,
        songs: data.songs,
        addedSongsData,
      }))
    .catch(e => displayError(e, 'Failed to get recordings for updated songs'));

  return api.updateClass(id, data).then(() =>
    dispatch({
      type: types.SET_CLASS,
      id,
      data,
    }));
};

export const deleteClass = id => dispatch =>
  api.deleteClass(id).then(() =>
    dispatch({
      type: types.DELETE_CLASS,
      id,
    }));

export const getLanguages = () => dispatch =>
  api
    .getLanguages()
    .then(languages =>
      dispatch({
        type: types.SET_LANGUAGES,
        languages,
      }))
    .catch(e => displayError(e, 'Failed to get updated languages'));

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

export const promoteToTeacher = (classId, studentId) => dispatch =>
  api.promoteToTeacher(classId, studentId).then(() =>
    dispatch({
      type: types.PROMOTE_TO_TEACHER,
      classId,
      studentId,
    }));

export const clearUserData = () => ({
  type: types.DELETE_USER_DATA,
});

export const login = (username, password) => dispatch =>
  api.login(username, password).then(() => {
    dispatch(getClasses());
    dispatch({
      type: types.SET_USER,
      user: { username },
    });
    api.getUser().then(user =>
      dispatch({
        type: types.SET_USER,
        user: {
          username: user.username,
          isAdmin: user.isAdmin,
        },
      }));
  });

export const logOut = () => (dispatch) => {
  // log out even if session deletion fails
  dispatch(clearUserData());
  api.deleteSession();
};

export const getUsers = () => dispatch =>
  api.getUsers().then(users =>
    dispatch({
      type: types.SET_USERS,
      users,
    }));
