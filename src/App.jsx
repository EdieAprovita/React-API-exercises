import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Characters';

function App() {
	const [characters, setCharacters] = useState([]);

	const fetchCharacters = async () => {
		const response = await fetch('https://rickandmortyapi.com/api/character/');
		const data = await response.json();
		setCharacters(data.results);
	};
	useEffect(() => {
		fetchCharacters();
	}, []);
	return (
		<div className='App'>
			<h1>React API Exercises</h1>
			<Characters characters={characters} />
		</div>
	);
}

export default App;
