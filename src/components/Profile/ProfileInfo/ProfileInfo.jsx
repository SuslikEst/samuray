import React from 'react';
import classes from './ProfileInfo.module.css';

import Preloader from '../../Common/Preloader';

import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
	return (
		  <div>
        <figure>
          <img 
            src="http://itd3.mycdn.me/image?id=867720872168&t=20&plc=WEB&tkn=*gW94mfnqDptNTtpMsQ_A_3nO3GE"
            alt="img1"
          />
        </figure>
        <div className={ classes.description }>
          <img src={ props.profile.photos.small } alt="img2" />
        </div>
        <div>
          { props.profile.fullName }
        </div>
        <div>
          <ProfileStatus status="Hello all mi friends!!!" />
        </div>
      </div>
	);
}

export default ProfileInfo;