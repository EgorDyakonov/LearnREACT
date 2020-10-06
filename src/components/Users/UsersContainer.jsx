import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC } from '../../redux/usersReducer';
import Users from './users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

// let UsersContainer = (props) => {
//     return(
//         <div>Users will be here</div>
//     );
// }

export default connect(mapStateToProps, mapDispatchToProps)(Users);
// export default UsersContainer;
