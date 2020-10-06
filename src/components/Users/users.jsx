import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from "./../../../src/assets/images/user.png";

class Users extends React.Component {
    componentDidMount() {
        if(this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    onPageChanges = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++ ){
            pages.push(i);
        }
        
        return(
            <div>   
                <div>
                    {pages.map(el=> {
                        return(
                            <span className={
                                this.props.currentPage === el? `${styles.currentPage} ${styles.selectedPage}` : styles.selectedPage
                            } onClick={(el)=>{this.onPageChanges(el);}}>{el}</span>
                        )
                    })}
                </div>
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