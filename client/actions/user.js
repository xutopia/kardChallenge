import { createAction } from 'redux-actions';
import axios from 'axios';
import { URL } from './url';

export const accessToken = createAction('accessToken');
export const accessTokenFailure = createAction('accessTokenFailure');
