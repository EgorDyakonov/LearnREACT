import React from 'react';
import styles from './users.module.css';
import userPhoto from './../../../src/assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../api/api';
        
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++ ){
        pages.push(i);
    }
    if(pages.length > 10) { // ограничил кол-во страниц ибо их слишком много 
        pages.length = 10;
    }

    return(
        <div>   
            <div>
                {pages.map(el=> {
                    return(
                        <span className={
                            props.currentPage === el? `${styles.currentPage} ${styles.selectedPage}` : styles.selectedPage
                        } onClick={()=>{props.onPageChanges(el);}}>{el}</span>
                    )
                })}
            </div>
            {
                props.users.map(el => <div key={el.id}>          
                    <span>
                        <NavLink to={'/profile/'+ el.id}>
                            <img alt="broke" className={styles.usersPhoto} src={el.photos.small != null ? el.photos.small: userPhoto}></img>
                        </NavLink>
                        <div>
                            { el.followed ? 
                                <button onClick={()=> {
                                    userAPI.userUnfollow(el.id).then(response => {
                                        if(response.resultCode === 0) {
                                            props.unfollow(el.id);
                                        }
                                    });
                                }} >unfollow</button>: 
                                <button onClick={()=> {
                                    userAPI.userFollow(el.id).then(response => {
                                        if(response.resultCode === 0) {
                                            props.follow(el.id);
                                        }
                                    });
                                }}>follow</button>
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