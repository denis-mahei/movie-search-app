import { fetchData } from '../tmdb-api.js';

import SearchMovie from '../components/SearchMovie/SearchMovie.jsx';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList.jsx';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getSearch() {
      try {
        const response = await fetchData(`/search/movie?query=${searchMovie}`);
        setResults(response.results);
      } catch (e) {
        console.log(e);
      }
    }

    getSearch();
  }, [searchMovie]);

  const handleSearch = (query) => {
    setSearchMovie(query);
  };
  return (
    <>
      <SearchMovie onSearch={handleSearch} />
      <MovieList items={results} />
    </>
  );
};
export default MoviesPage;
