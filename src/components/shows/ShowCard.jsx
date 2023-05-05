import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, summary, id }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 20).join(' ').replace(/<.+?>/g, '')
    : 'No Description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h2>{name}</h2>

      <p>{summaryStripped}</p>

      <div>
        <Link to="/">Read more</Link>
        <button type="button">Star me</button>
      </div>
      <br />
    </div>
  );
};

export default ShowCard;