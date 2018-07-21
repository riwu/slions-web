import axios from 'axios';
import handleSessionExpired from '../util/handleSessionExpired';

axios.defaults.baseURL = `${window.location.origin}/api/`;

const [get, post, patch, del] = ['get', 'post', 'patch', 'delete'].map(method => (path, data) =>
  axios({
    method,
    url: path,
    data,
  })
    .then(response => response.data)
    .catch(handleSessionExpired));

const postActivity = () => post('activity', { referrer: document.referrer });
const handlePostActivity = (data) => {
  postActivity();
  return data;
};

export const register = user => post('users', user).then(handlePostActivity);
export const login = (username, password) =>
  post('sessions', { username, password }).then(handlePostActivity);
export const deleteSession = () => del('session');
export const getClasses = () => get('classes');
export const getJoinedClasses = () => get('classes/joined');
export const getSongs = language => get(`songs?native=${language}&second=${language}`);
export const createClass = classInfo => post('classes', classInfo);
export const updateClass = (id, classInfo) => patch(`class/${id}`, classInfo);
export const updateVideoSize = () => patch('songs/videoSize');
export const joinClass = id => post(`class/${id}/students`);
export const leaveClass = id => del(`class/${id}/student`);
export const getClass = id => get(`class/${id}`);
export const getLanguages = () => get('languages');
export const removeFromClass = (classId, studentId) => del(`class/${classId}/student/${studentId}`);

if (process.env.NODE_ENV !== 'development') {
  postActivity();
}
