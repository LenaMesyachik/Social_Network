import React from "react";
import s from './../Dialogs.module.css';



export type PropsMessageType = {
    message: string,
    id: number,
}
export const Message = (props: PropsMessageType) => {
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
};

