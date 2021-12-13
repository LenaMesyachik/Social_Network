import React from 'react';
import {InitialStateType, UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";


export type UsersPropsType={
    users:Array<UserType>,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
    setUsers:(users: UserType[])=>void
}
export const  Users = (props:UsersPropsType) => {

    if (props.users.length !== 0) {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            debugger
        props.setUsers(response.data.items)
        })
    }
    console.log('USER')
            return <div>
        { props.users.map(u=><div key={u.id}>
            <span>
                <div className={s.item} > <img src = {u.photoUrl}/> </div>
                <div>
                    {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button> }
                    </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}