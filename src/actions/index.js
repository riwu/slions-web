import * as api from './api';
import * as types from './types';

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

export const getClassRecordings = () => dispatch =>
  api.getClassRecordings().then(recordings =>
    dispatch({
      type: types.SET_RECORDINGS,
      recordings,
    }));
