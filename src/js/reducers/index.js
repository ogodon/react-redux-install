import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import me from './me';
import you from './you';

export default combineReducers({
  me,
  you,
  routing: routerReducer
});
