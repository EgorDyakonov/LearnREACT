import React from 'react';
import mes from './Messages.module.css';

const Message = (props) => {
    if (props.send === 'me') {
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

    let MassageItem = props.message.map(el => <Message send={el.send} key={el.id} id={el.id} text={el.text} />);

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChanges(body);
    }
    let onSendMessage = () => {
        props.onSendMessages();
    }

    return (
        <div className={mes.messages}>
            {MassageItem}
            <div className={mes.inputText}>
                <input className={mes.inp} onChange={onNewMessageChange} value={props.messageBody} placeholder='write here...'></input>
                <button onClick={onSendMessage} className={mes.btn} >SEND</button>
            </div>
        </div>
    );
}

export default Messages;

