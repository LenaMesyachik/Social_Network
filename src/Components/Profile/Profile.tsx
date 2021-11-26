import React from 'react';
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {AllActionsCreatorType, RootReducerType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContanier";
import {Store} from "redux";


type ProfilePagePropsType = {
    /*profilePage:InitialStateType,
    dispatch:(action:AllActionsCreatorType)=>void*/
store:Store<RootReducerType, AllActionsCreatorType>
}
const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            /*    posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}*/
            />
        </div>
    )
}

export default Profile;
