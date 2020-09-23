import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    return(
        <div>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img alt="broke" className={styles.usersPhoto} src={el.photoUrl}></img>
                        </div>
                        <div>
                            { el.followed ? 
                            <button onClick={()=> {props.follow(el.id)}} >follow</button>: 
                            <button onClick={()=> {props.unfollow(el.id)}}>unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;