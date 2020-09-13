import React from 'react';
import mes from './Messages.module.css';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../../redux/dialogsReducer'

const Message = (props) => {
    if (props.send == 'me') {
        return (
            <div id={props.id} className={mes.messageMe}>{props.text}</div>
        );
    } else {
        return (
            <div id={props.id} className={mes.message}>{props.text}</div>
        );
    }
}

const Messages = (props) => {

    let MassageItem = props.message.map(el => <Message send={el.send} id={el.id} text={el.text} />);

    // let state = props.store.getState().dialogsPage;

    let newMessageBody = props.newMessageBody;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let onSendMessage = () => {

        props.store.dispatch(sendMessageCreator());
    }

    return (
        <div className={mes.messages}>
            {MassageItem}
            <div className={mes.inputText}>
                <input className={mes.inp} value={newMessageBody} onChange={onNewMessageChange} placeholder='write here...'></input>
                <button onClick={onSendMessage} className={mes.btn} >SEND</button>
            </div>
        </div>
    );
}

export default Messages;

