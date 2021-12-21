import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/img/user.png'

export type UsersPropsType={
    users:Array<UserType>,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
    setUsers:(users: UserType[])=>void
}
export const  Users = (props:UsersPropsType) => {
    const getUsers = () => {
    if (props.users.length === 0) {
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
        props.setUsers(response.data.items)
        })
    }}
    console.log('USER')


            return <div>

                <button onClick={getUsers}>Get users</button>
        { props.users.map(u=><div key={u.id}>
            <span>
                <div className={s.item} > <img src = {u.photos.small !== null ? u.photos.small : userPhoto }  /> </div>
                <div>
                    {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button> }
                    </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
}