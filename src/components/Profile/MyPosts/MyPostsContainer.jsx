import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, newTextInputCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posttData: state.profilePage.posttData,
        postText: state.profilePage.postText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        postTextt: (text) => {
            let action = newTextInputCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;