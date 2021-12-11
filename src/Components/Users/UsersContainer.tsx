import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AllActionsCreatorType, RootReducerType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";


export type MapStateToPropsType={
    users: InitialStateType

}
/*export type MapDispatchToPropsType={
    sendNewMessage:()=>{}
    updateMessageBod:(body:string)=>{}
}*/
const mapStateToProps = (state:RootReducerType):InitialStateType=>{
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:(action:AllActionsCreatorType)=> void)=>{
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