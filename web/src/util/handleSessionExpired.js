import { notification } from 'antd';
import { history } from '../routes';
import { store } from '../App';
import { clearUserData } from '../actions';

const handleSessionExpired = (e) => {
  if (((e || {}).response || {}).status === 401) {
    const {
      user: { username },
    } = store.getState();
    if (username) {
      history.push('/', { redirected: true });
      notification.warn({
        message: 'Session expired',
        description: 'Please re-login.',
        placement: 'topLeft',
      });
      store.dispatch(clearUserData());
    }
  }

  throw e;
};

export default handleSessionExpired;
