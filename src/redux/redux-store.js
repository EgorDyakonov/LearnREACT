// const { createStore } = require("redux");

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage : usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;