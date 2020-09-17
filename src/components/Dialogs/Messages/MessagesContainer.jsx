import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/dialogsReducer'
import StoreContext from '../../../storeContext';
import Messages from './Messages';

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let NewMessageChanges = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    let onSendMessages = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    return (<Messages onNewMessageChanges={NewMessageChanges}
                        onSendMessages={onSendMessages}
                        message={state.massage} />);
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesContainer;

