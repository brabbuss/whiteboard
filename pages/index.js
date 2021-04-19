import BrokenCode from "../components/BrokenCode";
import styles from "../styles/Home.module.css";

// Fix all the broken code
// Add a page for the chosen character
// Use SSR for getting the character details.

export default function Home() {
	const name = prompt("Please enter your name", "Tai Chi Charles");
	return (
		<div className={styles.container}>
			<BrokenCode name={name} />
		</div>
	);
}
