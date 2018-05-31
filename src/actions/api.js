import axios from 'axios';

axios.defaults.baseURL = `${window.location.origin}/api/`;

const [get, post] = ['get', 'post'].map(method => (path, data) =>
  axios({
    method,
    url: path,
    data,
  }).then(response => response.data));

export const register = user => post('users', user);
export const login = (username, password) => post('sessions', { username, password });
export const getClasses = () => get('classes');
export const getSongs = () => get('songs?native=en-US&second=en-US');

if (process.env.NODE_ENV !== 'development') {
  post('session', { referrer: document.referrer });
}
