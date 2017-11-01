import { combineReducers } from 'redux';
import bank from './bank';
import config from './config';
// import status from './status';
import user from './user';

export default combineReducers({ bank, config, user });
