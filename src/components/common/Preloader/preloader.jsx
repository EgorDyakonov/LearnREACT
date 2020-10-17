import React from 'react';
import Ss from './preloader.module.css';

const Preloader = (props) => {
    return (
        <div>
            <div className={Ss.ldsCircle}>
                <div></div>
            </div>
        </div>
    )
}


export default Preloader;