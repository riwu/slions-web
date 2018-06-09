import * as api from './api';
import * as types from './types';

export const x = 10;
export const login = (username, password) => dispatch =>
  api
    .login(username, password)
    .then(() =>
      dispatch({
        type: types.SET_USER,
        user: {
          username,
        },
      }))
    .catch((e) => {
      if (((e || {}).response || {}).status === 401) {
        alert('Username or password is wrong');
      } else {
        alert('Unable to connect to the server, check your internet connection');
      }
      throw e; // throw even when 401 so that promise is rejected
    });

export const getClasses = () => dispatch =>
  api.getClasses().then(classes =>
    dispatch({
      type: types.SET_CLASSES,
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