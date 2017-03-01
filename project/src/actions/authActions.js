import AuthApi from '../api/authApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import * as types from './actionTypes';
import {browserHistory} from 'react-router';


function loginUserSuccess() {
    return {type: types.LOGIN_SUCCESS};
}

function loginError(errorMessage) {
    return {type: types.LOGIN_ERROR, errorMessage}
}

export function logOutUser() {
    return {type: types.LOGOUT}
}

export function cleanLoginErrors() {
    return {type: types.CLEAN_LOGIN_ERROR}
}

export function loginUser(email, password) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return AuthApi.loginUser(email, password).then(response => {
            dispatch(loginUserSuccess());
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('role', response.user_role);
            browserHistory.push('/home');
        }).catch(error => {
            dispatch(ajaxCallError());
            dispatch(loginError("Username or password is invalid."));
            throw(error);
        });
    };
}