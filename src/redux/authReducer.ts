import {follow} from "./usersReducer";

export type InitialStateType = {}

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false

}


export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof setUserDataAC>
/*type setUserDataACType = {
    type: 'SET-USER-DATA',
    data: {
        id: null,
        email: null,
        login: null,
    }
}*/
export const setUserDataAC = ( data: {id: null, email: null, login: null}) => { return {type: 'SET-USER-DATA', data} as const }

    export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

