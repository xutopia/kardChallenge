import { createAction } from 'redux-actions';
import axios from 'axios';
import { URL } from './url';

export const accounts = createAction('accounts', async() => {
  let results = await axios.get(`${URL}/api/accounts`);

  return results;
});


export const transactions = createAction('transactions', async(startDate, endDate, opt) => {
  let data = {
    startDate,
    endDate,
    opt,
  };

  let results = await axios.post(`${URL}/api/transactions`, data);

  return results;
})
