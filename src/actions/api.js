import axios from 'axios';

axios.defaults.baseURL = `${window.location.origin}/api/`;

const [get, post, patch] = ['get', 'post', 'patch'].map(method => (path, data) =>
  axios({
    method,
    url: path,
    data,
  }).then(response => response.data));

export const register = user => post('users', user);
export const login = (username, password) => post('sessions', { username, password });
export const getClasses = () => get('classes');
export const getSongs = language => get(`songs?native=${language}&second=${language}`);
export const createClass = classInfo => post('classes', classInfo);
export const updateClass = (id, classInfo) => patch(`class/${id}`, classInfo);

if (process.env.NODE_ENV !== 'development') {
  post('session', { referrer: document.referrer });
}
