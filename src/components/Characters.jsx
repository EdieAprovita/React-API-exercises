const Characters = ({ characters }) => {
	return (
		<div className='Characters'>
			{characters.slice(0, 5).map(character => (
				<div className='Character' key={character.id}>
					<img src={character.image} alt={character.name} />
					<h3>{character.name}</h3>
					<p>{character.status}</p>
				</div>
			))}
		</div>
	);
};

export default Characters;
