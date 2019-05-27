// here importing alll reducers
import { combineReducers } from 'redux';

// reducers in project
import movies from './movies';

export default combineReducers({
    movies
});