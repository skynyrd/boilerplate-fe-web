import React from 'react';
import { Route/*, IndexRoute*/ } from 'react-router';
import App from './components/App';


// function checkIfAuthenticated(nextState, replaceState) {
//     let token = localStorage.getItem('token');

//     if(!(token)){
//         replaceState({ nextPathname: nextState.location.pathname }, '/login');
        
//         //TODO: Use something like toastr here.
//         console.log('Lütfen giriş yapın.');
//     }
// }

// let checkIfAdmin = function (nextState, replaceState) {
//     let token = localStorage.getItem('token');
//     let role = localStorage.getItem('role');

//     if(!token){
//         replaceState({ nextPathname: nextState.location.pathname }, '/login');

//         //TODO: Use something like toastr here.
//         console.log('Lütfen giriş yapın.');
//     }else if(role !== 'Admin'){
//         replaceState({ nextPathname: nextState.location.pathname }, '/login');
        
//         //TODO: Use something like toastr here.        
//         console.log('Bu alanı görmeye yetkili değilsiniz.');
//     }
// };

export default (
    <div>
		<Route path="/" component={App}>
	        {/*<IndexRoute component={LoginPage}/>*/}
	        {/*<Route onEnter={checkIfAuthenticated} path="home" component={HomePage}/>*/}
            {/*<Route onEnter={checkIfAdmin} path="group" component={AdminPage}/>*/}
	    </Route>
    </div>
);
