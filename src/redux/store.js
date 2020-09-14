import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posttData: [
                { id: 1, message: 'Hello how are you?', like: '15', name: 'Dmitry' },
                { id: 2, message: 'I am fine, what about you??', like: '20', name: 'Yehor' },
                { id: 3, message: 'Hiii guys', like: '9', name: 'Denis' },
                { id: 4, message: 'Audi best car!!!!!', like: '99', name: 'Andrey' }
            ],
            postText: [{text: ''}]
        },
        dialogsPage: {
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
        }
    },
    _callSubscribers() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribers = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscribers(this._state);   
    }
}

export default store;
// windows.store = store;