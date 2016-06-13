import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import statsReducer from './stats';
import platformReducer from './platform';

const rootReducer = combineReducers({
  routing: routeReducer,
  stats: statsReducer,
  platform: platformReducer
});

export default rootReducer;
