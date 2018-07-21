import { SET_USER, LOG_OUT } from '../actions/types';

const initialState = {
  username: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
