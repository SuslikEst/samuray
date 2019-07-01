import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// import store from './redux/store';
import store from './redux/redux-store';

import './index.css';
import App from './App';

const rerenderEntierTree = (state) => {
	ReactDOM.render(
			<BrowserRouter>
				<App store={ store } />
			</BrowserRouter>, 
			document.getElementById('root')
		);
};

rerenderEntierTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntierTree(state);
});

serviceWorker.unregister();
