import React from 'react';
import Us from './Users.module.css';
import { NavLink } from 'react-router-dom';


const UserItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={Us.user}>
            <NavLink to={path} activeClassName={Us.activeLink}>{props.name}</NavLink>
        </div>
    );
}

const Users = (props) => {

    let UserItems = props.users.map(el => <UserItem id={el.id} name={el.name} />);

    return (
        <div className={Us.users}>
            {UserItems}
        </div>
    );
}

export default Users;