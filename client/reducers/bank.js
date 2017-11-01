import { handleActions } from 'redux-actions';
import { accounts } from '../actions/bank';
import initialState from './initialState';

const bank = handleActions({
  [accounts](state, action) {
    console.log('action in accounts: ', accounts);
    return {
      ...state,
      accounts: action.payload,
    }
  },
}, initialState.bank);

export default bank;
