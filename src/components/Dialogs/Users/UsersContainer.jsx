import React from 'react';
import Users from "./Users"

const UserItemContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    return (
        <Users users={state.users} />
    );
}

export default UserItemContainer;