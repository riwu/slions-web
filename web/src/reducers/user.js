import { SET_USER, DELETE_USER_DATA } from '../actions/types';

const initialState = {
  username: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    case DELETE_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default user;
