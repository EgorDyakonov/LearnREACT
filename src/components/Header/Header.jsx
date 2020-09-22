import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img className={h.img} alt="broke logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png'></img>
        </header>
    );
}

export default Header;