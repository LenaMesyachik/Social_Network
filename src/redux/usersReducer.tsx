export type InitialStateType = {
    users: Array<UserType>
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
    users: [
        /* {id: 1,photoUrl:'https://www.film.ru/sites/default/files/people/1455889-881763.jpg' , followed: true, fullName: 'Anna', status: 'good mood', location: {city: 'Minsk', country: 'Belarus'}},
         {id: 2,photoUrl:'https://www.film.ru/sites/default/files/people/1455889-881763.jpg', followed: false, fullName: 'Lena', status: 'can fly', location: {city: 'Moscow', country: 'Russia'}},
         {id: 3,photoUrl:'https://www.film.ru/sites/default/files/people/1455889-881763.jpg', followed: true, fullName: 'Marina', status: 'live in my head', location: {city: 'Kiev', country: 'Ukraine'}},
         {id: 4,photoUrl:'https://www.film.ru/sites/default/files/people/1455889-881763.jpg', followed: false, fullName: 'Mark', status: 'sorry', location: {city: 'London', country: 'UK'}}*/
    ]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>


export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)


export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)


export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users} as const)

export default usersReducer;

