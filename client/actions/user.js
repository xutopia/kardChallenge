import { createAction } from 'redux-actions';
import axios from 'axios';
import { URL } from './url';

export const accessToken = createAction('accessToken', (publicKey, plaidENV) => {
  let handler = Plaid.create({
    apiVersion: 'v2',
    clientName: plaidENV,
    env: plaidENV,
    product: ['transactions'],
    key: publicKey,
    onSuccess: function(publicToken) {
      let result = axios.post(`${URL}/token/getAccessToken`, {
          publicToken: publicToken,
        })
        .then(result => {
          return result;
        })
        .catch(err => {
          return err;
        });
    },
  });

  handler.open();
});
