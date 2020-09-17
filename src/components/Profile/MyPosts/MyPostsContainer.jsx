import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, newTextInputCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let postNewText = (text) => {
                        let action = newTextInputCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <MyPosts postTextt={postNewText} addPost={addPost}
                            posttData={state.profilePage.posttData}
                            postText={state.profilePage.postText} />);
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;