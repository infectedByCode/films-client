import { combineReducers } from 'redux';
import filmsReducer from './films/filmsReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({ films: filmsReducer, user: userReducer });

export default rootReducer;
