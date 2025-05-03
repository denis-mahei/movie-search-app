import { fetchData } from '../tmdb-api.js';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList.jsx';
import SearchMovie from '../components/SearchMovie/SearchMovie.jsx';
import { toast, Toaster } from 'react-hot-toast';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') || '';
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
    setSearchParams({ query });
  };
  return (
    <>
      <SearchMovie onSearch={handleSearch} />
      <MovieList items={results} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
export default MoviesPage;
