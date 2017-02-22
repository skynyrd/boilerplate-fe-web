function getAuthState() {
    let token = localStorage.getItem('token');
    if(token){
        return {authenticated: true}
    }
    return {authenticated: false}
}

export default {
    numAjaxCallInProgress: 0,
    auth: getAuthState()
};
