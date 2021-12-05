import React from 'react';
import {addPostA, changePostA} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {RootReducerType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: RootReducerType) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        addPostText: () => {dispatch(addPostA())
        },
        onChangeHandler: (newText: string) => {dispatch(changePostA(newText!))
        }

    }
}

const   MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;



