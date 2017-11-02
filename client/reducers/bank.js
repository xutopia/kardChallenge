import { handleActions } from 'redux-actions';
import { accounts, transactions } from '../actions/bank';
import initialState from './initialState';

const bank = handleActions({
  [accounts](state, action) {
    return {
      ...state,
      accounts: action.payload.data.accounts,
      numbers: action.payload.data.numbers,
    }
  },
  [transactions](state, action) {
    return {
      ...state,
      transactions: action.payload.data.transactions,
    }
  }
}, initialState.bank);

export default bank;
