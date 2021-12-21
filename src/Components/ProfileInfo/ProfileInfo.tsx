import React from 'react';
import s from "./ProfileInfo.module.css"
import {Preloader} from "../Users/Preloader";
import {ProfileType} from "../../redux/profileReducer";
import userPhoto from './../../assets/img/user2.png'


export type ProfileInfoPropsType = {
    profile:  ProfileType,
    }
export const ProfileInfo = ({profile}: ProfileInfoPropsType) => {
    console.log( profile)
    if (!profile){ //profile===null/underfined
        return <Preloader/>
        console.log( profile)}

    return (

        <div>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src = {profile.photos && profile.photos.large } alt={'userPhoto'}/>
                    <div> {profile.fullName}</div>
                    <div> {profile.contacts}</div>
                    <div> {profile.lookingForAJob}</div>
            </div>
        </div>
    )
}

