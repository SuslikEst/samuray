import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AuthRedirect } from '../../hoc/AuthRedirect';
import Dialogs from './Dialogs';

import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (text) => {
      dispatch(updateNewMessageBodyActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  };
};

export default compose(
  AuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);