import {addPostA, changePostA} from "./profileReducer";

type dialogsType = {
    id: number,
    name: string
}
export type messageType = {
    id: number,
    message: string
}
export type InitialStateType = {
    dialogs: Array<dialogsType>,
    messages: Array<messageType>,
    newMessageBody: string
}
let initialState:InitialStateType = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Lina"},
        {id: 4, name: "Fil"},
        {id: 5, name: "Roma"}
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'ok'},
        {id: 4, message: 'i like it'},
        {id: 5, message: 'Whaat?'},
    ],
    newMessageBody: ''

}


const dialogsReducer = (state:InitialStateType=initialState, action: ActionsTypes):InitialStateType => {
    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body;
    }

    if (action.type === 'SEND-NEW-MESSAGE') {
        let body = state.newMessageBody
        state.messages.push({id: 6, message: body})
        state.newMessageBody = ''
    }
    return state
}
export type ActionsTypes =
     ReturnType<typeof sendMessageA>
    | ReturnType<typeof updateMessageA>

export const sendMessageA = () => ({type: 'SEND-NEW-MESSAGE'} as const)
export const updateMessageA = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const)
export default dialogsReducer;

