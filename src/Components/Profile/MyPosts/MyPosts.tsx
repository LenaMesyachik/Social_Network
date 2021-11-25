import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post, {postsType} from "./Post/Post";
import {addPostA, changePostA} from "../../../redux/profileReducer";

export type profilePagePropsType = {
    posts: Array<postsType>
    newPostText:string
    dispatch: any
}

function MyPosts(props: profilePagePropsType) {
    const PostsElements = props.posts.map(el => <Post message={el.message}
                                                      likesCount={el.likesCount} /*id={el.id}*//>)
    const newPostRef = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.dispatch(addPostA())
    }
const onChangeHandler=()=> {
    const newText=newPostRef.current?.value
    props.dispatch(changePostA(newText!))
}

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} ref={newPostRef} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
                <div className={s.item}>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;



