

/*export type InitialStateType  = {}*/

const initialState = {
    id: null as (number|null) ,
    email: null as string | null,
    login: null as string | null,
    isAuth: false

}
export type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>
/*type setUserDataACType = {
    type: 'SET-USER-DATA',
    data: {
        id: null,
        email: null,
        login: null,
    }
}*/
export const setAuthUserData = ( id: null | number,  email: null | string, login: null | string, isAuth: false
) => { return {type: 'SET-USER-DATA',data :{id, email, login}} as const }

  //  export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

