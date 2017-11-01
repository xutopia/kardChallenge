import { handleActions } from 'redux-actions';
import { accessToken, accessTokenFailure } from '../actions/user';
import initialState from './initialState';

const user = handleActions({
  [accessToken](state, action) {
    return {
      ...state,
      hasAccessToken: true,
    };
  },
  [accessTokenFailure](state, action) {
    console.log('action, accessTokenFailure: ', action);
    return {
      ...state,
      hasAccessToken: false,
      errors: action.payload,
    }
  }
}, initialState.user);

export default user;
