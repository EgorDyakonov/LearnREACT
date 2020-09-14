const ADD_POST = 'ADD-POST';
const NEW_TEXT_INPUT = 'NEW-TEXT-INPUT';

let initialState = {
    posttData: [
        { id: 1, message: 'Hello how are you?', like: '15', name: 'Dmitry' },
        { id: 2, message: 'I am fine, what about you??', like: '20', name: 'Yehor' },
        { id: 3, message: 'Hiii guys', like: '9', name: 'Denis' },
        { id: 4, message: 'Audi best car!!!!!', like: '99', name: 'Andrey' }
    ],
    postText: [{text: ''}]
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.postText[0].text,
                like: 0,
                name: 'Vihr\''
            };
            state.posttData.push(newPost);
            state.postText[0].text = "";
            return state;
        case NEW_TEXT_INPUT: 
            state.postText[0].text = action.symbol;
            return state;
        default: 
            return state;
    }      
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const newTextInputCreator = (text) => {
    return {type: NEW_TEXT_INPUT, symbol: text}
}

export default profileReducer;