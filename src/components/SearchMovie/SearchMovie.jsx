import { useState } from 'react';
import css from './SearchMovie.module.css';

const SearchMovie = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      onSearch(query);
    }

    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        className={css.field}
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};
export default SearchMovie;
