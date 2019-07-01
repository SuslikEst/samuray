import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import store from './redux/store';

import './index.css';
import App from './App';

const rerenderEntierTree = (state) => {
	ReactDOM.render(
			<BrowserRouter>
				<App state={ store.getState() } dispatch={ store.dispatch.bind(store) } />
			</BrowserRouter>, 
			document.getElementById('root')
		);
};

rerenderEntierTree(store.getState());

store.subscribe(rerenderEntierTree);

serviceWorker.unregister();
