import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_TOKEN,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(url, options);

  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return response.data;
};
