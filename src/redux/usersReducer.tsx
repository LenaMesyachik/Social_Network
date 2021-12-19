export type InitialStateType = {
    users: Array<UserType>,
    pageSize:number,
    totalUserCount: number,
    currentPage: number,
    isFetching:boolean
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
    totalUserCount: 0,
    currentPage: 1,
    isFetching:true
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
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount> | ReturnType<typeof toggleIsFetching>


export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)


export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)


export const setUsers = (users: UserType[]) => ({type: "SET-USERS", users} as const)

export const setCurrentPage = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)

export const setTotalUserCount = (totalUserCount:number) => ({type: "SET-TOTAL-USER-COUNT", totalUserCount} as const)

export const toggleIsFetching = (isFetching:boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

export default usersReducer;

