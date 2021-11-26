import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {InitialStateType} from "../../redux/profileReducer";
import {AllActionsCreatorType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContanier";


type ProfilePagePropsType = {
    profilePage:InitialStateType,
    dispatch:(action:AllActionsCreatorType)=>void

}
const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;
