import { handleActions } from 'redux-actions';
import initialState from './initialState';

const status = handleActions({
  // TODO: add status triggers for loading so that a spinner can be added when loading
}, initialState.status);

export default status;
