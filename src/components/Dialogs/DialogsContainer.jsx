import React from 'react';

import Dialogs from './Dialogs';

import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

  let state = props.store.getState();
console.log(state);
  const changeMessage = (text) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(text));
  };

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

	return (
    <Dialogs 
      changeMessage={ changeMessage }
      sendMessage={ sendMessage }
      dialogs={ state.dialogsPage.dialogs }
      messages={ state.dialogsPage.messages }
      newMessageBody={ state.dialogsPage.newMessageBody }
    />
    );
 
};

export default DialogsContainer;