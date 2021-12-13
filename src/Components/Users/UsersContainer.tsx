import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootReducerType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";


export type MapStateToPropsType=InitialStateType

/*export type MapDispatchToPropsType={
    sendNewMessage:()=>{}
    updateMessageBod:(body:string)=>{}
}*/
const mapStateToProps = (state:RootReducerType):InitialStateType=>{
    return {
        users: state.usersPage.users
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
        }
    }
}

const  UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default  UserContainer;