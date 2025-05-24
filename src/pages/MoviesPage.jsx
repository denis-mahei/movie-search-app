import { fetchData } from '../tmdb-api.js';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList.jsx';
import SearchMovie from '../components/SearchMovie/SearchMovie.jsx';
import { toast, Toaster } from 'react-hot-toast';
import Loader from '../components/Loader/Loader.jsx';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') || '';
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getSearch() {
      try {
        setIsLoading(true);
        const response = await fetchData(`/search/movie?query=${searchMovie}`);
        setResults(response.results);
      } catch (e) {
        toast.error('Not found!');
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getSearch();
  }, [searchMovie]);

  const handleSearch = (query) => {
    setSearchParams({ query });
  };
  return (
    <>
      {isLoading && <Loader />}
      <SearchMovie onSearch={handleSearch} />
      <MovieList items={results} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
export default MoviesPage;
