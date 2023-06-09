import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { searchForShows, searchForActors } from '../api/tvmaze';
import ActorsGrid from '../components/actors/ActorsGrid';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForActors(filter.q),
    enabled: !!filter,

    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error ocurred: {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No result found</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
