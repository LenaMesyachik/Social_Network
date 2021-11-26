import React from 'react';
import {addPostA, changePostA} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {AllActionsCreatorType, RootReducerType} from "../../../redux/redux-store";

export type MyPostsContanierPropsType = {
    store:Store<RootReducerType, AllActionsCreatorType>
}

const MyPostsContainer = (props:MyPostsContanierPropsType) => {

    const addPostText = () => {
        props.store.dispatch(addPostA())
    }
    const onChangeHandler = (newText:string) => {
        props.store.dispatch(changePostA(newText!))
    }

    return (
        <MyPosts posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText} updateNewPostText={onChangeHandler} addPost={addPostText}/>
    )
}

export default MyPostsContainer;



