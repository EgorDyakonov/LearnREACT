import React from "react";
import Preloader from "../../common/Preloader/preloader";
import Pi from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div className={Pi.pictEf}>
                <img alt="broke bg" className={Pi.frstPic} src='https://i.pinimg.com/originals/7d/69/e3/7d69e357a9267fc119efde2caf423862.jpg'></img>
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    );
}

export default ProfileInfo;