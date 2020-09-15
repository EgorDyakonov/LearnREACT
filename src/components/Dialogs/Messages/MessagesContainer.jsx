import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../../redux/dialogsReducer'
import Messages from './Messages';

const MessagesContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let NewMessageChanges = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let onSendMessages = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (
        <Messages onNewMessageChanges={NewMessageChanges} onSendMessages={onSendMessages} message={state.massage} />
   );
}

export default MessagesContainer;

