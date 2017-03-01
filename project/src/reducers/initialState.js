function getAuthState() {
    let token = localStorage.getItem('token');
    if(token){
        return {authenticated: true, errorMessage: null}
    }
    return {authenticated: false, errorMessage: null}
}

export default {
    numAjaxCallInProgress: 0,
    auth: getAuthState(),
};
