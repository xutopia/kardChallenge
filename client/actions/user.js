import { createAction } from 'redux-actions';
import axios from 'axios';
import { URL } from './url';


export const accessToken = createAction('accessToken', async(publicToken) => {
  let reqBody = {
    publicToken: publicToken
  };
  let result = await axios.post(`${URL}/token/getAccessToken`, reqBody);

  return result;
});


export const accessTokenFailure = createAction('accessTokenFailure');
