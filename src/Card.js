import React from 'react';


//const Card = (props) => {
//deconstructing props
const Card = ({name, email, id}) => {
	//const {name, email, id } = props;
	return (
		<div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt='robots' />
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
	);
}
export default Card;