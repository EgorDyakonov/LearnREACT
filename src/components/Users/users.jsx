import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from "./../../../src/assets/images/user.png";

class Users extends React.Component {
    constructor(props) {
        super(props);
        
        if(this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {
        return(
            <div>
                {
                    this.props.users.map(el => <div key={el.id}>          
                        <span>
                            <div>
                                <img alt="broke" className={styles.usersPhoto} src={el.photos.small != null ? el.photos.small: userPhoto}></img>
                            </div>
                            <div>
                                { el.followed ? 
                                    <button onClick={()=> {this.props.unfollow(el.id)}} >unfollow</button>: 
                                    <button onClick={()=> {this.props.follow(el.id)}}>follow</button>
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
}

export default Users;