import React from "react";

const CoolThings = ({ show, setShow, character }) => {
	return (
		<div>
			<br/>
			Character Details
			<br/>
			<h1>NAME HERE</h1>
			<h2>DOB HERE</h2>
			<h3>{character?.name}</h3>
			{/* <h1>{character.name}</h1>
			<h2>Born: {birth_year}</h2> */}

		</div>
	);
};

export default CoolThings;
