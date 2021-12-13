import React from "react";
import axios from "axios";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";

type UsersPropsType={
    users:Array<UserType>,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void
    setUsers:(users: UserType[])=>void
}

class Users extends React.Component<UsersPropsType> {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}> Get users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                <div className={s.item}> <img src={u.photos.small !== null ? u.photos.small : 'userPhoto'}/> </div>
                <div>
            {u.followed ? <button onClick={() => {this.props.unfollow(u.id)}}> Unfollow </button> :
                <button onClick={() => {this.props.follow(u.id)}}> Follow </button>}
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
}


export default Users;