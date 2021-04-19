import buildClient from "../api/buildClient";

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

// CoolThings.getInitialProps = async (context, client) => {
// 	const res = await fetch(`https://swapi.py4e.com/api/people/1`);
//   const data = await res.json()
// 	return {character: data}
// }

export default CoolThings;