import { handleActions } from 'redux-actions';
import { accessToken } from '../actions/user';
import initialState from './initialState';

const user = handleActions({
  [accessToken](state, action) {
    console.log('action, accessToken: ', action);
    return {
      ...state,
      errrors: action.payload.data.errors,
      hasAccessToken: action.payload.data.hasAccessToken,
    };
  }
})
