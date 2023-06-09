const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : '/Image_not_found.png'}
            />
          </div>
          <div>
            {person.name} | {character.name}
            {voice && '|Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
