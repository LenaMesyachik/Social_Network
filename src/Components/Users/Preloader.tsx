import React from "react";
import s from "./Users.module.css";
import preloader from "../../assets/spinner-icon-gif-28.jpg";



export const Preloader = () =>{

return (
    <div className={s.item}>
        <img  src={preloader}/>
    </div>
)
}