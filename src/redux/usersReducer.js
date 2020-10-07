const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = "TOTAL_COUNT";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( (el) => {
                    if(el.id === action.userId) {
                        return {...el, followed: true};
                    }
                    return el;
                }) 
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false};
                    }
                    return el;
                }) 
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return ({
        type: FOLLOW,
        userId
    })
}
export const unFollowAC = (userId) => {
    return ({
        type: UNFOLLOW,
        userId
    })
}
export const setUsersAC = (users) => {
    return ({
        type: SET_USERS,
        users
    })
}
export const setCurrentPageAC = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
}
export const setUsersTotalCountAC = (totalCount) => {
    return({
        type: TOTAL_COUNT,
        totalCount
    })
}

export default usersReducer;