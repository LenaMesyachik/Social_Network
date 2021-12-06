
export type postType = {
    message: string,
    likesCount: number
} //тип посттайп
export type InitialStateType = {
    posts: Array<postType>
    newPostText: string
}


let initialState: InitialStateType = {
    posts: [
        {/*id:1,*/ message: "Hi, how are you?", likesCount: 5},
        {/*id:2,*/ message: "it's a good day", likesCount: 23},
    ],
    newPostText: '',
}


const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    let stateCopy = {...state}
    if (action.type === 'ADD-POST') {
        const newPost: postType = {
            message: state.newPostText,
            likesCount: 0
        }
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        stateCopy.newPostText = action.newText
    }
    return stateCopy
}

export type ActionsTypes =
    ReturnType<typeof addPostA>
    | ReturnType<typeof changePostA>


export const addPostA = () => ({type: 'ADD-POST'} as const)
export const changePostA = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer;

