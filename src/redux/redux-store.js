// const { createStore } = require("redux");

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage : usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;