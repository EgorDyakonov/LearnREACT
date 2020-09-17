import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './storeContext'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <StoreContext.Provider value= {store} >
            <App />
        </StoreContext.Provider>
    , document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});