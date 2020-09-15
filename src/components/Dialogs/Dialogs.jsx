import React from 'react';
import dia from './Dialogs.module.css';
import HeaderDialogs from './Header/HeaderDialogs';
// import Messages from './Messages/Messages';
import MessagesContainer from './Messages/MessagesContainer';
import Users from './Users/Users';

const Dialogs = (props) => {
    
    return (
        <div>
            <HeaderDialogs />
            <div className={dia.items}>
                <Users users={props.users} />
                <MessagesContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Dialogs;