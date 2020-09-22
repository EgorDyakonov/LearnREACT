// import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users"

// const UserItemContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;
//                     return (<Users users={state.users} />);
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users
    }
}

const UserItemContainer = connect(mapStateToProps)(Users);

export default UserItemContainer;