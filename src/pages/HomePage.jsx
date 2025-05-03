import { useEffect, useState } from 'react';
import { fetchData } from '../tmdb-api.js';
import MovieList from '../components/MovieList/MovieList.jsx';
import { toast, Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await fetchData('/trending/movie/day');
        setMovies(data.results);
      } catch (e) {
        toast.error('Oops! Something went wrong!');
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <main>
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
