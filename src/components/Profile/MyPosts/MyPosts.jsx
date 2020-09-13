import React from 'react';
import MyP from './MyPosts.module.css';
import Postt from './Post/Postt';
import {addPostActionCreator, newTextInputCreator} from './../../../redux/profileReducer';

const MyPosts = (props) => {

    let postsElements = props.posttData.map((el) => <Postt message={el.message} like={el.like} name={el.name} />);

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postNewText = () => {
        let text = newPost.current.value;
        props.dispatch(newTextInputCreator(text));
    }

    return (
        <div className={MyP.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <input ref={newPost} onChange={postNewText} value={props.postText[0].text}></input>
                </div>
                <div>
                    <button className={MyP.btn} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={MyP.parent}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;