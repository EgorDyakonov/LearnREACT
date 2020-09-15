import React from 'react';
import dia from './Dialogs.module.css';
import HeaderDialogs from './Header/HeaderDialogs';
// import Messages from './Messages/Messages';
import MessagesContainer from './Messages/MessagesContainer';
import UserItemContainer from './Users/UsersContainer';

const Dialogs = (props) => {
    
    return (
        <div>
            <HeaderDialogs />
            <div className={dia.items}>
                <UserItemContainer store={props.store} />
                <MessagesContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Dialogs;