export type postsType = {
    message: string,
    likesCount: number
}
type postType = {
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
    if (action.type === 'ADD-POST') {
        const newPost: postsType = {
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
    }
    return state
}

export type ActionsTypes =
    ReturnType<typeof addPostA>
    | ReturnType<typeof changePostA>


export const addPostA = () => ({type: 'ADD-POST'} as const)
export const changePostA = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer;

