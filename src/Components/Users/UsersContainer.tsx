import React from "react";
import {connect} from "react-redux";
import UsersC from "./UsersCAPI";
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
import UsersCAPI from "./UsersCAPI";


export type MapStateToPropsType=InitialStateType

/*export type MapDispatchToPropsType={
    sendNewMessage:()=>{}
    updateMessageBod:(body:string)=>{}
}*/
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

const  UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCAPI)
export default  UserContainer;