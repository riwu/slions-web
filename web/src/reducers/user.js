import { SET_USER } from '../actions/types';

const initialState = {
  username: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default user;
