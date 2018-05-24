import * as api from './api';
import * as types from './types';

export const login = (username, password) => dispatch =>
  api.login(username, password).then(() =>
    dispatch({
      type: types.SET_USER,
      user: {
        username,
      },
    }));

export const getClassRecordings = () => (dispatch) => {
  api.getClassRecordings().then(result =>
    dispatch({
      type: types.SET_RECORDINGS,
      result,
    }));
};
