import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
                { photoUrl: "https://www.uokpl.rs/fpng/d/356-3566990_logo-png-50x50.png",
                    followed: true, id: 1, status: "unasy man", fullName: "Dmitry", location: {country:"Belarus", city: "Minsk"} },
                { photoUrl: "https://www.uokpl.rs/fpng/d/356-3566990_logo-png-50x50.png",
                    followed: true, id: 2, status: "Pretty and cute", fullName: "Yehor", location: {country:"Russia", city: "Moscow"} },
                { photoUrl: "https://www.uokpl.rs/fpng/d/356-3566990_logo-png-50x50.png",
                    followed: false, id: 3, status: "crazy man xD", fullName: "Denis", location: {country:"Ukraine", city: "Kiev"} },
                { photoUrl: "https://www.uokpl.rs/fpng/d/356-3566990_logo-png-50x50.png",
                    followed: false, id: 4, status: "I am a boos", fullName: "Andrey", location: {country:"Ukraine", city: "Dnepro"} }
            ]
        )
    }
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
                                <button onClick={()=> {props.unfollow(el.id)}} >unfollow</button>: 
                                <button onClick={()=> {props.follow(el.id)}}>follow</button>
                            }
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