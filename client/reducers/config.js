import { handleActions } from 'redux-actions';
import { loginLink } from '../actions/config';
import initialState from './initialState';

const config = handleActions({
  [loginLink](state, action) {
    console.log('action: ', action);
    return {
      ...state,
      publicKey: action.payload.data.PLAID_PUBLIC_KEY,
      plaidENV: action.payload.data.PLAID_ENV,
    };
  }
}, initialState.config);

export default config;
