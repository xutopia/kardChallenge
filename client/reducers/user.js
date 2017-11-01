import { handleActions } from 'redux-actions';
import { accessToken, accessTokenFailure } from '../actions/user';
import initialState from './initialState';

const user = handleActions({
  [accessToken](state, action) {
    return {
      ...state,
      hasAccessToken: action.payload.data.hasAccessToken,
    };
  },
  [accessTokenFailure](state, action) {
    return {
      ...state,
      hasAccessToken: false,
    }
  }
}, initialState.user);

export default user;
