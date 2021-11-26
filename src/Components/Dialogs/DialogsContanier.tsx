import React from "react";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, InitialStateType, sendMessageA, updateMessageA} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import {AllActionsCreatorType, RootReducerType} from "../../redux/redux-store";


type DialogsContainerPropsType = {
    store:Store<RootReducerType, AllActionsCreatorType>
    /*dialogsPage: InitialStateType
    dispatch: (action: ActionsTypes) => void*/
}


const DialogsContainer = ({ ...props}: DialogsContainerPropsType) => {



    const sendNewMessage = () => {
        props.store.dispatch(sendMessageA())
    }

    const updateMessageBody = (body:string) => {
        props.store.dispatch(updateMessageA(body))
    }
    return (
       <Dialogs dialogsPage={props.store.getState().dialogsPage} sendNewMessage={sendNewMessage} updateMessageBody={updateMessageBody}/>
    )
}
export default  DialogsContainer;