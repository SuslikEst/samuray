import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state }) => {

	return (
    <div className={ classes.dialogs } >
    	<div className={ classes.dialogsItems } >
    		{ state.dialogs.map(({ id, name}) => <DialogItem name={ name } id={ id } key={ id }/>) }
    	</div>
    	<div className={ classes.messages } >
    		{ state.messages.map(({ id, message}) => <Message message={ message } id={ id } key={ id }/>) }
    	</div>
    </div>
	);
 
}

export default Dialogs;