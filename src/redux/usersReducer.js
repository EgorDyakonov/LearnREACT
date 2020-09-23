const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: 
    [
        { photoUrl: "https://www.brandeps.com/icon-download/U/User-female-icon-vector-01.svg",
            followed: true, id: 1, status: "unasy man", fullName: "Dmitry", location: {country:"Belarus", city: "Minsk"} },
        { photoUrl: "https://www.brandeps.com/icon-download/U/User-female-icon-vector-01.svg",
            followed: true, id: 2, status: "Pretty and cute", fullName: "Yehor", location: {country:"Russia", city: "Moscow"} },
        { photoUrl: "https://www.brandeps.com/icon-download/U/User-female-icon-vector-01.svg",
            followed: false, id: 3, status: "crazy man xD", fullName: "Denis", location: {country:"Ukraine", city: "Kiev"} },
        { photoUrl: "https://www.brandeps.com/icon-download/U/User-female-icon-vector-01.svg",
            followed: false, id: 4, status: "I am a boos", fullName: "Andrey", location: {country:"Ukraine", city: "Dnepro"} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( el => {
                    if(el.id === action.userId) {
                        return {...el, followed: true};
                    }
                }) 
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( el => {
                    if(el.id === action.userId) {
                        return {...el, followed: false};
                    }
                }) 
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;