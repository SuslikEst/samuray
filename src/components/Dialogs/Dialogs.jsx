import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ changeMessage, sendMessage, dialogs, messages, newMessageBody }) => {

  const handlerOnChangeMessage = (e) => {
    let body = e.target.value;
    changeMessage(body);
  };

  const handlerSendMessage = () => {
    sendMessage();
  };

	return (
    <div className={ classes.dialogs } >
    	<div className={ classes.dialogsItems } >
    		{ dialogs.map(({ id, name}) => <DialogItem name={ name } id={ id } key={ id }/>) }
    	</div>
    	<div className={ classes.messages } >
    		<div>
          { messages.map(({ id, message}) => <Message message={ message } id={ id } key={ id }/>) }
        </div>
        <div>
          <div>
            <textarea onChange={ handlerOnChangeMessage } value={ newMessageBody } placeholder='Enter yore message...'></textarea>
          </div>
          <div>
            <button onClick={ handlerSendMessage } >Send message</button>
          </div>
        </div>
    	</div>
    </div>
	);
 
}

export default Dialogs;