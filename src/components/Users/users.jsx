import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from "./../../../src/assets/images/user.png";

let Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }
    return(
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(el => <div key={el.id}>          
                    <span>
                        <div>
                            <img alt="broke" className={styles.usersPhoto} src={el.photos.small != null ? el.photos.small: userPhoto}></img>
                        </div>
                        <div>
                            { el.followed ? 
                                <button onClick={()=> {props.unfollow(el.id)}} >unfollow</button>: 
                                <button onClick={()=> {props.follow(el.id)}}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.country"}</div>
                            <div>{"el.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;