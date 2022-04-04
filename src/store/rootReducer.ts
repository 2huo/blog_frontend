import { combineReducers } from 'redux';

import user from './user/reducer';
import page from './page/reducer';
const rootReducer = combineReducers({
  user,
  page,
});
export default rootReducer;
