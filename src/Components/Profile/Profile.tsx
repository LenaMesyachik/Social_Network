import React from 'react';
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContanier";
import {ProfileType} from "../../redux/profileReducer";
export type ProfilePropsType = {
    profile: ProfileType,
    }

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
