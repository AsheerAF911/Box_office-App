import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();

  return <div>Show Items for show {showId}</div>;
};

export default Show;
