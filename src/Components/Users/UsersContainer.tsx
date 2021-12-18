import React from "react";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {UsersFunc} from "./UsersFunc";

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

class UsersСAPI extends React.Component<UsersPropsType> {
    /* constructor(props:UsersPropsType) {
         super(props);
         if (this.props.users.length === 0)
     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
          this.props.setUsers(response.data.items)
      }
      )}*/
    componentDidMount() {
        debugger
        /*  if (this.props.users.length === 0)*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)

        })
    }
    onPageChanged = (pageNumber:number) => {this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            debugger
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })}   //меняем карент пэйдж на пэйдж намбер, чтоюы шел запрос на актуальную стр

    render() {
        debugger

        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <UsersFunc users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers} totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage} setTotalUserCount={this.props.setTotalUserCount} onPageChanged={this.onPageChanged}/>
        )}}

const mapStateToProps = (state:RootReducerType):InitialStateType=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage. currentPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch)=>{
    return {
        follow: (userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number) => {

            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount:(totalUserCount:number) => {

            dispatch(setTotalUserCountAC(totalUserCount))
        }
    }

}
const  UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersСAPI)
export default  UserContainer;




