// import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/dialogsReducer'
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
        message: state.dialogsPage.massage,
        messageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessages: () => {
            dispatch(sendMessageCreator());
        },
        onNewMessageChanges: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

