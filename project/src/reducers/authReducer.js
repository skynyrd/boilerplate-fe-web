import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, authenticated: true};

        case types.LOGOUT:
            return {...state, authenticated: false};

        case types.LOGIN_ERROR:
            return {...state, error: action.errorMessage};

        case types.CLEAN_LOGIN_ERROR:
            return {...state, error: {}};

        default:
            return state;
    }
}