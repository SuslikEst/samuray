import React from 'react';

import { message } from './Message.module.css';

const Message = ({ message }) => {
	return(
	  <div className={ message }>
  		{ message }
  	</div>
	);
};

export default Message;