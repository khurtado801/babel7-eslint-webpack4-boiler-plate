import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

/**
 * ReactDOM has two arguements passed in
 * The first arguement is what we want to render
 * The second arguement is where we want to render it
 */
ReactDOM.render(
	<App />,
	document.getElementById('root')
);

