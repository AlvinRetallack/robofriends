import React from 'react';

const Card = () => {
	return (
	<div className='bg-light-green dib pa2 ma2 br4'>
		<img alt='photo' src='https://robohash.org/test?200x200'/>
		<div>
			<h2>Jane Doe</h2>
			<p>jane.doe@email.com</p>
		</div>
	</div>
  )
}

export default Card;