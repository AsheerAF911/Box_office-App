import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze.js';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData.jsx';
import Details from '../components/shows/Details.jsx';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h1>Details</h1>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
      </div>
    );
  }

  return <div>Data is loading....</div>;
};

export default Show;
