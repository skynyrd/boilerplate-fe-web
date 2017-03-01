import * as axios from 'axios';
import toastr from 'toastr';
import store from '../store/configureStore';
import {logOutUser} from '../actions/authActions';
import AuthServerURL from '../../config/appConfig';


function prepareHeaders() {
    return {
        headers: {"Content-Type": "application/json", "Authorization" : "Bearer " + localStorage.getItem('token')}
    };
}

export default class AuthApi {
    static loginUser(email, password) {
        let getTokenRequestModel = {
            "username": email,
            "password": password
        };

        return axios.post(`${AuthServerURL}/path/for/token`, getTokenRequestModel, prepareHeaders())
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                displayReloginPageIfNeeded(error);
                throw error;
            });
    }
}

function displayReloginPageIfNeeded(error){
    if(error.response.status === 401 || error.response.status === 403){
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        store.dispatch(logOutUser());
        toastr.error("Your session is expired.");
    }
}