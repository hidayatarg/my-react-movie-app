// here importing alll reducers
import { combineReducers } from 'redux';

// reducers in project
import movie from './movies';

export default combineReducers({
    movie
});