const NEW_TEXT_MESSAGE_BODY = 'NEW-TEXT-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case NEW_TEXT_MESSAGE_BODY: 
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE: 
            let body = state.newMessageBody
            state.newMessageBody = action.body;
            state.massage.push({ send: 'me', id: 6, text: body });
            return state;
        default: 
            return state;   
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {type: NEW_TEXT_MESSAGE_BODY, body: body}
}

export default dialogsReducer;