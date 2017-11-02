import { createAction } from 'redux-actions';
import axios from 'axios';
import Plaid from 'plaid';
import { URL } from './url';

export const loginLink = createAction('loginLink', async() => {
  let result = await axios.get(`${URL}/login/link`);

  return result;
});
