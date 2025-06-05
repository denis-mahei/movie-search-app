import { useEffect, useState } from 'react';
import { fetchData } from '@srv/tmdb-api.js';
import MovieList from '@/MovieList/MovieList.jsx';
import { toast, Toaster } from 'react-hot-toast';
import Loader from '@/Loader/Loader.jsx';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        const data = await fetchData('/trending/movie/day');
        setMovies(data.results);
      } catch (e) {
        toast.error('Oops! Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <h1
        style={{ margin: '16px 0 16px', color: '#90cea1', textAlign: 'center' }}
      >
        Trending today
      </h1>
      <Toaster position="top-right" />
      {movies.length > 0 && <MovieList items={movies} />}
    </main>
  );
};
export default HomePage;
