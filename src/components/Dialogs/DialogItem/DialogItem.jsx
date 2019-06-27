import React from 'react';
import { NavLink } from 'react-router-dom';

import { dialog, active } from './DialogItem.module.css';

const DialogItem = ({ id, name }) => {
	return(
		<div className={ dialog + ' ' + active}>
			<NavLink to={ `/dialogs/${ id }` }>{ name }</NavLink>
  	</div>
	);
};

export default DialogItem;