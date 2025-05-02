import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const options = {
  include_adult: false,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const fetchData = async (endpoint) => {
  const response = await axios.get(`${url}${endpoint}`, options);
  return response.data;
};
