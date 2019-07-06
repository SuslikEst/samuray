import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = (props) => {
	return (
		<header className={classes.header}>
		  <div className="container">
      	<img 
        	src="http://pngimg.com/uploads/chrome_logo/chrome_logo_PNG3.png"
        	alt="logo" 
      	/>
      </div>
      <div className={ classes.loginBlock }>
      { props.isAuth ?
        props.login
        :
        <NavLink to='/login'>Login</NavLink>
      }
      </div>
    </header>
	);
}

export default Header;