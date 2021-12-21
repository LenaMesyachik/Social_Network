export type postType = {
    message: string,
    likesCount: number
} //тип посттайп
export type InitialStateType = {
    posts: Array<postType>,
    newPostText: string,
    profile: ProfileType
}
export type ProfileType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string
    }
    photos: {
        small: string,
        large: string
    }
}

let initialState = {
    posts: []    ,
    newPostText: '',
    profile: {} as ProfileType // или пустой объект
}


const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'ADD-POST':
            const newPost: postType = {
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            /* stateCopy.posts.push(newPost)
             stateCopy.newPostText = ''*/
            return stateCopy

        case 'UPDATE-NEW-POST-TEXT':
            stateCopy = {
                ...state,
                newPostText: action.newText
            }
            return stateCopy

        case 'SET-USER-PROFILE':
            stateCopy = {
                ...state,
                profile: action.profile
            }
            return stateCopy
        default:
            return stateCopy

    }
}

export type ActionsTypes =
    ReturnType<typeof addPostA>
    | ReturnType<typeof changePostA>
    | ReturnType<typeof setUsersProfile>


export const addPostA = () => ({type: 'ADD-POST'} as const)
export const changePostA = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
export const setUsersProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile: profile} as const)

export default profileReducer;

