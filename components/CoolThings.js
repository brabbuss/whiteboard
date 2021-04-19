const CoolThings = ({character: {name, birth_year}}) => {
	return (
		<div>
			<br/>
			Character Details
			<br/>
			<h3>{name}</h3>
			<h3>{birth_year}</h3>
		</div>
	);
};

export default CoolThings;
