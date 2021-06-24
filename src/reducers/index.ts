import { combineReducers } from 'redux';
import filmsReducer from './films/filmsReducer';

const rootReducer = combineReducers({ films: filmsReducer });

export default rootReducer;
