import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
		  <div className="container">
      	<img 
        	src="http://pngimg.com/uploads/chrome_logo/chrome_logo_PNG3.png"
        	alt="logo" 
      	/>
      </div>
    </header>
	);
}

export default Header;