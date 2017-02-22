import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress, auth
});

export default rootReducer;
