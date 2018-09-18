import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { clients } from './clients.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  clients,
  alert
});

export default rootReducer;