import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { addPost, changePost } from './redux/state';

export const rerenderEntierTree = (state) => {
	ReactDOM.render(<BrowserRouter><App state={ state } addPost={ addPost } changePost={ changePost }/></BrowserRouter>, document.getElementById('root'));
};
