import { useState, useEffect } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  useEffect(() => {
    console.log('COMPONENT MOUNTS');
  }, []);

  const onInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = { q: searchStr, searchOption };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onInputChange} />

      <label>
        shows
        <input
          type="radio"
          name="search-option"
          checked={searchOption === 'shows'}
          value="shows"
          onChange={onRadioChange}
        />
      </label>

      <label>
        actors
        <input
          type="radio"
          name="search-option"
          checked={searchOption === 'actors'}
          value="actors"
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
