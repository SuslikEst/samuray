import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
// import store from './redux/store';
import store from './redux/redux-store';

import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={ store }>
			<App />
		</Provider>
	</BrowserRouter>, 
	document.getElementById('root')
);

serviceWorker.unregister();
