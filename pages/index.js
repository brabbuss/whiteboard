import BrokenCode from "../components/BrokenCode";
import styles from "../styles/Home.module.css";
import React, {useState} from 'react';

// Fix all the broken code
// Add a page for the chosen character
// Use SSR for getting the character details.

export default function Home() {
	const [name, setName] = useState(null)
	
	const handleChange = (value) => {
		setName(value)
	}

	return (
		<div className={styles.container}>
			<BrokenCode name={name} handleChange={handleChange}/>
		</div>
	);
}
