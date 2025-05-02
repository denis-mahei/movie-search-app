// import { fetchMovies } from '../tmdb-api.js';

import SearchMovie from '../components/SearchMovie/SearchMovie.jsx';

const MoviesPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
  };

  return (
    <>
      <SearchMovie />
    </>
  );
};
export default MoviesPage;
