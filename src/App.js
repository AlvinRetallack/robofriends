import React from 'react';
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './searchbox'

const App = () => {
	return (
	  <div> 
	  	<h1 className='tc'>Robofriends</h1>
	  	<SearchBox />
	  	<CardList robots={robots}/>
	  </div>

	);
}

export default App;