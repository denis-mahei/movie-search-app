import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../tmdb-api.js';
import MovieList from '../components/MovieList/MovieList.jsx';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const results = await fetchTrendingMovies();
        setMovies(results);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main>
      <h1 style={{ margin: '16px 0 16px' }}>Trending today</h1>
      {movies.length > 0 && <MovieList items={movies} />}
    </main>
  );
};
export default HomePage;
