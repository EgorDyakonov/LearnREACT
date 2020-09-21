// const { createStore } = require("redux");

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;