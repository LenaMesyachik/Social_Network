import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/img/user.png'
import {ResultCodeEnum} from "../Header/HeaderContainer";

export type UsersPropsType={
    users:Array<UserType>,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
    setUsers:(users: UserType[])=>void
}
export const  Users = (props:UsersPropsType) => {
    console.log(userPhoto)
    const getUsers = () => {
    if (props.users.length === 0) {
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
        props.setUsers(response.data.items)
        })
    }}


            return <div>

                <button onClick={getUsers}>Get users</button>
        { props.users.map(u=><div key={u.id}>
            <span>
                <div className={s.item} > <img src={u.photos.small !== null ? u.photos.small : userPhoto }  /> </div>
                <div>
                    {u.followed ? <button onClick={()=>{
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                { withCredentials: true,
                                  /*  header: {'API-KEY':  '55360c88-929c-4769-8aa8-2c2f9e14b649'}*/ },
                           )
                                .then(response => {
                                    if (response.data.resultCode === ResultCodeEnum.Success) {
                                        props.unfollow(u.id)
                                    }
                                })
                       }}>Unfollow</button> :
                        <button onClick={()=>{
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true})
                                .then(response => {
                                    if (response.data.resultCode === ResultCodeEnum.Success) {
                                        props.follow(u.id)
                                    }
                             })
                            }}>Follow</button> }
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