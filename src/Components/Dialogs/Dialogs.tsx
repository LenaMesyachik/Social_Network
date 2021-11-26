import React from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialogsReducer";


type DialogsPagePropsType = {
    dialogsPage: InitialStateType
    sendNewMessage:()=>void
    updateMessageBody:(body:string)=>void

}


const Dialogs = ({dialogsPage, ...props}: DialogsPagePropsType) => {

    const DialogsElement = dialogsPage.dialogs.map(el =>
        <DialogsItem id={el.id} name={el.name}/>
    )

    const MessageElement = dialogsPage.messages.map(mes =>
        < Message id={mes.id} message={mes.message}/>
    )
    const newMessageBody = dialogsPage.newMessageBody
    const onSendMessageClick = () => {
       /* props.dispatch(sendMessageA())*/
       props.sendNewMessage()
    }
    const newPostRef = React.createRef<HTMLTextAreaElement>()
    const onNewMessageChange = () => {
        const body = newPostRef.current ? newPostRef.current.value : ''
       /* props.dispatch(updateMessageA(body))*/
        props.updateMessageBody(body)
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