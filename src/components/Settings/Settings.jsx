import React from 'react';
import set from './Settings.module.css';

const Settings = () => {
    return (
        <div>
            <div className={set.quastion}>Are you shure what are you want to change??</div>
            <button className={`${set.yes} ${set.btn}`}>YES</button>
            <button className={`${set.no} ${set.btn}`}>NO</button>
        </div>
    );
}

export default Settings;