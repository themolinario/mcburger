import { combineReducers } from 'redux';
import auth from './auth';
import cooks from './cooks';
import snack from './snack';
import files from './files';

export default combineReducers({
  auth, cooks, snack, files,
});