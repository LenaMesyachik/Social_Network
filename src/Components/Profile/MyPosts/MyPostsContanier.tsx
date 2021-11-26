import React from 'react';
import Post, {postsType} from "./Post/Post";
import {addPostA, changePostA} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

export type MyPostsContanierPropsType = {
    posts: Array<postsType>
    newPostText: string
    dispatch: any
}

const MyPostsContainer = (props:MyPostsContanierPropsType) => {

    const addPostText = () => {
        props.dispatch(addPostA())
    }
    const onChangeHandler = (newText:string) => {
        props.dispatch(changePostA(newText!))
    }

    return (
        <MyPosts posts={props.posts} newPostText={props.newPostText} updateNewPostText={onChangeHandler} addPost={addPostText}/>
    )
}

export default MyPostsContainer;



