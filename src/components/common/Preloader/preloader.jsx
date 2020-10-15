import React from 'react';
import Ss from './preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={Ss.container}>
            <div className={`${Ss.dash} ${Ss.uno}`}></div>
            <div className={`${Ss.dash} ${Ss.dos}`}></div>
            <div className={`${Ss.dash} ${Ss.tres}`}></div>
            <div className={`${Ss.dash} ${Ss.cuatro}`}></div>
        </div>
    )
}

export default Preloader;