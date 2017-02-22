import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import '../node_modules/toastr/build/toastr.min.css';
import {Provider} from 'react-redux';


injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
  document.getElementById('root')
);
