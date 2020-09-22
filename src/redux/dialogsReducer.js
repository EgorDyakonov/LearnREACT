const NEW_TEXT_MESSAGE_BODY = 'NEW-TEXT-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    users: [
        { id: 1, name: 'Yehor' },
        { id: 2, name: 'Dmitriy' },
        { id: 3, name: 'Denis' },
        { id: 4, name: 'Bananius' },
        { id: 5, name: 'Valera' }
    ],
    massage: [
        { send: 'me', id: 1, text: 'Hi my friend' },
        { send: 'no', id: 2, text: 'Hi, how are you?' },
        { send: 'me', id: 3, text: 'Good, What about you?' },
        { send: 'no', id: 4, text: 'Same' },
        { send: 'me', id: 5, text: 'Ooh it\'s grate :3' }
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TEXT_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: action.body,
                massage: [...state.massage, { send: 'me', id: 6, text: body }]
            }
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
    return { type: NEW_TEXT_MESSAGE_BODY, body: body }
}

export default dialogsReducer;