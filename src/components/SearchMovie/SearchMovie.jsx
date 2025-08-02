import { useState } from 'react';
import css from './SearchMovie.module.css';
import { toast } from 'react-hot-toast';

const SearchMovie = ({ onSearch, genre, localGenre, setLocalGenre }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === '') {
      toast.error('Please enter a search query');
    }
    if (query.trim()) {
      onSearch(query, localGenre);
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
      <select
        name="genres"
        value={localGenre}
        onChange={(e) => setLocalGenre(e.target.value)}
      >
        <option value="all">All</option>
        {genre.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};
export default SearchMovie;
