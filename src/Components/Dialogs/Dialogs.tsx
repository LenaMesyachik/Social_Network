import React, {ChangeEventHandler} from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, InitialStateType, sendMessageA, updateMessageA} from "../../redux/dialogsReducer";



type DialogsPagePropsType = {
    dialogsPage:InitialStateType
    dispatch:(action:ActionsTypes)=>void
}


const Dialogs = (props:DialogsPagePropsType) => {

    const DialogsElement = props.dialogsPage.dialogs.map(el =>
        <DialogsItem id={el.id} name={el.name}/>
    )

    const MessageElement = props.dialogsPage.messages.map(mes =>
        < Message id={mes.id} message={mes.message}/>
    )
    const newMessageBody = props.dialogsPage.newMessageBody
    const onSendMessageClick = () => {
        props.dispatch(sendMessageA())
    }
    const newPostRef = React.createRef<HTMLTextAreaElement>()
    const onNewMessageChange = () => {
        const body = newPostRef.current ? newPostRef.current.value : ''
        props.dispatch(updateMessageA(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                <div> {MessageElement}</div>
                <div><textarea placeholder='Enter your message'
                               onChange={onNewMessageChange}
                               ref={newPostRef}
                               value={newMessageBody}
                /></div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;