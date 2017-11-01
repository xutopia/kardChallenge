import { handleActions } from 'redux-actions';
import { accounts } from '../actions/bank';
import initialState from './initialState';

const bank = handleActions({
  [accounts](state, action) {
    return {
      ...state,
      accounts: action.payload.data.accounts,
      numbers: action.payload.data.numbers,
    }
  },
}, initialState.bank);

export default bank;
