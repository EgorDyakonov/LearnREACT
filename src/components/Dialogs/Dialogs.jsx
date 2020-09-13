import React from 'react';
import dia from './Dialogs.module.css';
import HeaderDialogs from './Header/HeaderDialogs';
import Messages from './Messages/Messages';
import Users from './Users/Users';

const Dialogs = (props) => {
    
    return (
        <div>
            <HeaderDialogs />
            <div className={dia.items}>
                <Users users={props.users} />
                <Messages message={props.massage} store={props.store}/>
            </div>
        </div>
    );
}

export default Dialogs;