import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze.js';
import { useQuery } from '@tanstack/react-query';

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
    return <div>We have data: {showData.name}</div>;
  }

  return <div>Data is loading....</div>;
};

export default Show;
