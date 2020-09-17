import React from 'react';
import StoreContext from './../../../storeContext';
import Users from "./Users"

const UserItemContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    return (<Users users={state.users} />);
                }
            }
        </StoreContext.Consumer>
    );
}

export default UserItemContainer;