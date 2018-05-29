import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<h1>RoboFriends</h1>
		<div>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>

, document.getElementById('root'));
registerServiceWorker();
