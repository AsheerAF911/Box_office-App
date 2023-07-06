import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze.js';

const Show = () => {
  const { showId } = useParams();

  const [showData, setShowData] = useState();
  const [showError, setShowError] = useState();

  useEffect(() => {
    //getShowById()

    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>We have data: {showData.name}</div>;
  }

  return <div>Data is loading....</div>;
};

export default Show;
