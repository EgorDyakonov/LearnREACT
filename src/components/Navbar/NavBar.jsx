import React from 'react';
import n from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={n.nav}>
      <div className={n.item}>
        <NavLink to='/profile' activeClassName={n.activeLink}>Profile</NavLink>
      </div>
      <div className={`${n.item} ${n.active}`}>
        <NavLink to='/dialogs'  activeClassName={n.activeLink}>Messages</NavLink>
      </div>
      <div className={`${n.item} ${n.active}`}>
        <NavLink to='/users'  activeClassName={n.activeLink}>Users</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/news'  activeClassName={n.activeLink}>News</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/music'  activeClassName={n.activeLink}>Music</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to='/settings'  activeClassName={n.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;