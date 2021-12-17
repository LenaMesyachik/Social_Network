export type InitialStateType = {
    users: Array<UserType>,
    pageSize:number,
    totalUserCount: number,
    currentPage: number

}
export type UserType = {
    id: number,
    photos: {
        small:null,
        large: null,
    }
    followed: boolean,
    name: string,
    status: string,
    /*location: locationType*/
}

/*type locationType = {
    city: string,
    country: string
}*/
const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 16381,
    currentPage: 3
}


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case "SET-USERS":
            return {
                ...state,
                users: [ ...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-USER-COUNT":
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUserCountAC>


export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)


export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)


export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users} as const)

export const setCurrentPageAC = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)

export const setTotalUserCountAC = (totalUserCount:number) => ({type: "SET-TOTAL-USER-COUNT", totalUserCount} as const)

export default usersReducer;

