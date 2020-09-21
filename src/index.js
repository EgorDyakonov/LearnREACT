import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import StoreContext from './storeContext'
import {Provider} from 'react-redux';

// let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>
        , document.getElementById('root'));
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });