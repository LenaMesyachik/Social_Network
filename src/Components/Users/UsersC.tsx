import React from "react";
import axios from "axios";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import {inspect} from "util";


type UsersPropsType = {
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setTotalUserCount:(totalUserCount:number) => void
}

class Users extends React.Component<UsersPropsType> {
    /* constructor(props:UsersPropsType) {
         super(props);
         if (this.props.users.length === 0)
     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
          this.props.setUsers(response.data.items)
      }
      )}*/
/*
    componentDidMount() {
        debugger/!*  if (this.props.users.length === 0)*!/
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }*/

    onPageChanged = (pageNumber:number) => {this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
this.props.setUsers(response.data.items)
this.props.setTotalUserCount(response.data.totalUserCount)
})}
    //меняем карент пэйдж на пэйдж намбер, чтоюы шел запрос на актуальную стр

    render() {
        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {
                    pages.map(p => {

                        return <span onClick={(e) => {
                            this.onPageChanged(p)
                        }}
                                     className={this.props.currentPage === p ? s.selectedPage : ''}
                        >{p}</span>
                    })}
            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                <div className={s.item}> <img src={u.photos.small !== null ? u.photos.small : 'userPhoto'}/> </div>
                <div>
            {u.followed ? <button onClick={() => {
                    this.props.unfollow(u.id)
                }}> Unfollow </button> :
                <button onClick={() => {
                    this.props.follow(u.id)
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
}


export default Users;