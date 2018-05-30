import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';
import App from './App'

ReactDOM.render(
	<div>
		<App robots={robots}/>
	</div>

, document.getElementById('root'));
registerServiceWorker();
