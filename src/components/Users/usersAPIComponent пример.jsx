// import React from 'react';
// import * as axios from "axios";
// import Users from "./users";
///////////////////////////////////пример компоненты с axios////////////////////////////
// class UsersAPIComponent extends React.Component {
//     componentDidMount() {
//         if(this.props.users.length === 0) {
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setUsersTotalCount(response.data.totalCount);
//             });
//         }
//     }

//     onPageChanges = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items);
//         });
//     }

//     render() {
//         return (
//             <Users
//                 totalUsersCount={this.props.totalUsersCount}
//                 pageSize={this.props.pageSize}
//                 currentPage={this.props.currentPage}
//                 onPageChanges={this.onPageChanges}
//                 users={this.props.users}
//                 unfollow={this.props.unfollow}
//                 follow={this.props.follow}
//             />
//         );
//     }
// }

// export default UsersAPIComponent;