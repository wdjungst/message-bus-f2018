import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import messages from './messages';
import users from './users';

const rootReducer = combineReducers({
  user,
  flash,
  messages,
  users,
});

export default rootReducer;
