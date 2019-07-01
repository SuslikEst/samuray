import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = ({ dialogs, messages, newMessageBody, dispatch }) => {

  const handlerOnChangeMessage = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyActionCreator(body));
  };

  const handlerSendMessage = () => {
    dispatch(sendMessageActionCreator());
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