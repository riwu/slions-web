import axios from 'axios';

const [get, post] = ['get', 'post'].map(method => (path, data) =>
  axios({
    method,
    url: path,
    data,
  }).then(response => response.data));

export const register = user => post('users', user);
export const login = (username, password) => post('sessions', { username, password });
export const getClassRecordings = () => get('classRecordings');
