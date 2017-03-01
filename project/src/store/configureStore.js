import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    /* eslint-disable no-underscore-dangle */
    
    let store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState,
        applyMiddleware(thunk));

    return store;
    /* eslint-enable */
}