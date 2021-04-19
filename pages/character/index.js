import buildClient from "../../api/buildClient";

const CoolThings = ({ character }) => {
  const { name, birth_year } = character;

  if (!character) return <div>loading...</div>;
  if (character.detail) {
    console.log("Error, character not found. Please contact website admin");
    return (
      <div>
        Failed to load, please check console for details or <br /> contact the
        website administrator: scottbrabson@gmail.com
      </div>
    );
  }

  return (
    <div>
      <br />
      Character Details
      <br />
      <h3>{name}</h3>
      <h3>{birth_year}</h3>
    </div>
  );
};

CoolThings.getInitialProps = async (context, client) => {
  // 87 total IDs
  const randomCharID = Math.floor(Math.random() * 88).toFixed(0);
  const res = await fetch(`https://swapi.py4e.com/api/people/${randomCharID}`);
  const data = await res.json();
  return { character: data };
};

export default CoolThings;