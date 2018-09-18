import axios from 'axios';
import handleSessionExpired from '../util/handleSessionExpired';

axios.defaults.baseURL = '/api/';

const [get, post, patch, del] = ['get', 'post', 'patch', 'delete'].map(method => (path, data) =>
  axios({
    method,
    url: path,
    data,
  })
    .then(response => response.data)
    .catch(handleSessionExpired));

const postActivity = () => post('activities', { referrer: document.referrer });
const handlePostActivity = (data) => {
  postActivity();
  return data;
};

export const register = user => post('users', user).then(handlePostActivity);
export const login = (username, password) =>
  post('sessions', { username, password }).then(handlePostActivity);
export const getUser = () => get('/users/me');
export const deleteSession = () => del('sessions/me');
export const getClasses = () => get('classes');
export const getJoinedClasses = () => get('classes/joined');
export const getSongs = language =>
  get(`songs?native=${language}&second=${language}&sections=true`);
export const createClass = classInfo => post('classes', classInfo);
export const updateClass = (id, classInfo) => patch(`classes/${id}`, classInfo);
export const deleteClass = id => del(`classes/${id}`);
export const updateVideoSize = () => patch('songs/videoSize');
export const joinClass = id => post(`classes/${id}/students`);
export const leaveClass = id => del(`classes/${id}/student`);
export const getClass = id => get(`classes/${id}`);
export const getLanguages = () => get('languages');
export const removeFromClass = (classId, studentId) =>
  del(`classes/${classId}/student/${studentId}`);
export const promoteToTeacher = (classId, studentId) =>
  patch(`classes/${classId}/student/${studentId}`, { isTeacher: true });
export const getRecordings = (classId, songs) =>
  get(`classes/${classId}/recordings?songs=${songs}`);

if (process.env.NODE_ENV !== 'development') {
  postActivity();
}
