import { createAction } from 'redux-actions';
import axios from 'axios';
import { URL } from './url';

export const accounts = createAction('accounts', async() => {
  let results = await axios.get(`${URL}/api/accounts`);

  return results;
})
