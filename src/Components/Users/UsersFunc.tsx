import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import userPhoto from '../../assets/img/user.png'


type UsersPropsType = {
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setTotalUserCount: (totalUserCount: number) => void
    onPageChanged:(pageNumber:number) => void
}

export const UsersFunc = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {
                pages.map(p => {

                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                                 className={props.currentPage === p ? s.selectedPage : ''}
                    >{p}</span>
                })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                <div className={s.item}> <img src={u.photos.small !== null ? u.photos.small : 'userPhoto'}/> </div>
                <div>
            {u.followed ? <button onClick={() => {
                    props.unfollow(u.id)
                }}> Unfollow </button> :
                <button onClick={() => {
                    props.follow(u.id)
                }}> Follow </button>}
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
            </div>)
        }
    </div>

}


