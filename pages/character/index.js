import buildClient from "../../api/buildClient";
import { useRouter } from 'next/router';

const CoolThings = ({ character }) => {
  const { name, birth_year } = character;
  const router = useRouter()
  
  if (!character) return <div>loading...</div>;
  if (character.detail) {
    console.log("Error, character not found. Please contact website admin");
    return (
      <div>
        Failed to load, please refresh the page. <br /> If you continue to have issues, please contact the
        website administrator: scottbrabson@gmail.com
      </div>
    );
  }

  return (
    <div>
      <br />
      Character Details
      <br />
      <h3>Name: {name}</h3>
      <h3>DOB: {birth_year}</h3>
      <br />
      <button onClick={() => router.back()}>Go Back</button>
      <br />
      <button onClick={() => router.reload()}>Get Another Character</button>
    </div>
  );
};

CoolThings.getInitialProps = async (context, client) => {
  // 87 total IDs
  const randomCharID = Math.floor(Math.random() * 87 + 1).toFixed(0);
  const res = await fetch(`https://swapi.py4e.com/api/people/${randomCharID}`);
  const data = await res.json();
  return { character: data };
};

export default CoolThings;