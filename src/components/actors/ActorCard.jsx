import { Link } from 'react-router-dom';
const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>

      <p>
        {country ? `Comes from ${country}` : 'No description about country'}
      </p>

      {!!birthday && <p> Born on {birthday}</p>}

      <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>

      <div>
        <Link to="/">Read more</Link>
        <button type="button">Star me</button>
      </div>
      <br />
    </div>
  );
};

export default ActorCard;
