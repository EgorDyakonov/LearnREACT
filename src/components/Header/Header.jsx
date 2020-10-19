import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
    return (
        <header className={h.header}>
            <img className={h.img} alt="broke logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'></img>
            <div className={h.loginBlock}>
                {
                    props.isAuth ? <a className={h.loginBlock}>{props.login}</a> 
                    :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;