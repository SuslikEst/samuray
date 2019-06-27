import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		  <div>
        <figure>
          <img 
            src="http://itd3.mycdn.me/image?id=867720872168&t=20&plc=WEB&tkn=*gW94mfnqDptNTtpMsQ_A_3nO3GE"
            alt="img"
          />
        </figure>
        <div className={ classes.description }>
          ava + desc
        </div>
      </div>
	);
}

export default ProfileInfo;