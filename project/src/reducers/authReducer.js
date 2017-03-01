import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return { authenticated: true, errorMessage: null };

        case types.LOGOUT:
            return { authenticated: false, errorMessage: null };

        case types.LOGIN_ERROR:
            return Object.assign({}, state, { errorMessage: action.errorMessage });

        case types.CLEAN_LOGIN_ERROR:
            return Object.assign({}, state, { errorMessage: null });

        default:
            return state;
    }
}