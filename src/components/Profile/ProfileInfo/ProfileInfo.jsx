import React from "react";
import Pi from "./ProfileInfo.module.css";

const ProfileInfo = (props) => { 
    return (
        <div>
            <div className={Pi.pictEf}>
                <img alt="broke bg" className={Pi.frstPic} src='https://i.pinimg.com/originals/7d/69/e3/7d69e357a9267fc119efde2caf423862.jpg'></img>
            </div>
            <div>
            </div>
        </div>
    );
}

export default ProfileInfo;