import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, newTextInputCreator} from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postNewText = (text) => {
        let action = newTextInputCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts postTextt={postNewText} addPost={addPost}
        posttData={state.profilePage.posttData} postText={state.profilePage.postText}/>
    );
}

export default MyPostsContainer;