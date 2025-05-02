import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const token = import.meta.env.VITE_TMDB_TOKEN;
const options = {
  include_adult: false,
  headers: {
    accept: 'application/json',
    Authorization: token,
  },
};

export const fetchData = async (endpoint) => {
  const response = await axios.get(`${url}${endpoint}`, options);
  return response.data;
};
