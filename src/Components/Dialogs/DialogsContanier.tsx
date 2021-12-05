import React from "react";
import {InitialStateType, sendMessageA, updateMessageA} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {AllActionsCreatorType, RootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";


export type MapStateToPropsType={
    dialogsPage: InitialStateType

}
export type MapDispatchToPropsType={
    sendNewMessage:()=>{}
    updateMessageBod:(body:string)=>{}
}
const mapStateToProps = (state:RootReducerType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:(action: AllActionsCreatorType) => void) => {
    return {
        sendNewMessage : () => {dispatch(sendMessageA())},
        updateMessageBody: (body:string) => {dispatch(updateMessageA(body))}

    }
}
const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default  DialogsContainer;