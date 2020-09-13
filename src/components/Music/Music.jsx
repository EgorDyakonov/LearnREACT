import React from 'react';
import mus from './Music.module.css';

const Music = () => {
    return (
        <div>
            <div className={mus.item}>What are you want to hear??</div>
            <div className={mus.item}>Pls send me</div>
            <input className={mus.input} placeholder='Here!'></input>
            <button className={mus.btn}>Send</button>
        </div>
    );
}

export default Music;