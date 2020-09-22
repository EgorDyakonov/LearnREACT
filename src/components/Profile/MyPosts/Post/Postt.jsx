import React from 'react';
import Pos from './Postt.module.css';

const Postt = (props) => {
    return (
        <div className={Pos.post}>
            <img alt="broke user Img" src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg'></img>
            <div className={Pos.item}>{props.message}</div>
            <div>
                <div>Name: {props.name}</div>
                <span>Like's: {props.like}</span>
            </div>
        </div>
    );
}

export default Postt;