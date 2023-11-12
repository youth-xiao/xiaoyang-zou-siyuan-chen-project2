// rootReducer.jsx
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import rowReducer from './rowReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  row: rowReducer,
});

export default rootReducer;
