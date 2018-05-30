import React from 'react';

const Card = ({name, email, id}) => {
	return (
	<div className='bg-light-green dib pa2 ma2 br4 grow'>
		<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
		<div className='tc'>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
  )
}

export default Card;