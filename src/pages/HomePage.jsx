import { useEffect, useState } from 'react';
import { fetchData } from '../tmdb-api.js';
import MovieList from '../components/MovieList/MovieList.jsx';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await fetchData('/trending/movie/day');
        setMovies(data.results);
      } catch (e) {
        console.log(e);
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
      {movies.length > 0 && <MovieList items={movies} />}
    </main>
  );
};
export default HomePage;
