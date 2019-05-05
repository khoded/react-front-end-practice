import React from 'react';
import 'tachyons';
//pass in the 
const SearchBox = ({ searchfield, searchChange}) =>{
	return (
		<div className="pa2">
			<input 
			className="pa3 ba b--green bg-lightest-blue"
			type='text' 
			placeholder= 'search robots'
			//create a trigger event handler that connects i.e== to the prop name in the searchBox component
			onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;