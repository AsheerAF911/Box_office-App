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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button">Star me</button>
      </div>
      <br />
    </div>
  );
};

export default ShowCard;
