const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) {
                        return { ...el, followed: true };
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false };
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, 
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return ({
        type: FOLLOW,
        userId
    })
}
export const unfollow = (userId) => {
    return ({
        type: UNFOLLOW,
        userId
    })
}
export const setUsers = (users) => {
    return ({
        type: SET_USERS,
        users
    })
}
export const setCurrentPage = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
}
export const setUsersTotalCount = (totalCount) => {
    return ({
        type: TOTAL_COUNT,
        totalCount
    })
}
export const toggleIsFetching = (isFetching) => {
    return({
        type: TOGGLE_IS_FETCHING,
        isFetching
    })
}

export default usersReducer;