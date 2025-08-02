import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from '@srv/tmdb-api.js';
import { toast, Toaster } from 'react-hot-toast';
import MovieList from '@/MovieList/MovieList.jsx';
import SearchMovie from '@/SearchMovie/SearchMovie.jsx';
import Loader from '@/Loader/Loader.jsx';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') || '';
  const selectedGenre = searchParams.get('genre') || '';
  const [genres, setGenres] = useState([]);
  const [localGenre, setLocalGenre] = useState('all');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getSearch() {
      try {
        setIsLoading(true);
        const [movies, genres] = await Promise.all([
          fetchData(`/search/movie?query=${searchMovie}`),
          fetchData('/genre/movie/list'),
        ]);
        if (selectedGenre === 'all' || selectedGenre === '') {
          setResults(movies.results);
        } else {
          const filtered = movies.results.filter((movie) =>
            movie.genre_ids.includes(Number(selectedGenre))
          );
          setResults(filtered);
          console.log(genres);
        }
      } catch (e) {
        toast.error('Not found!');
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getSearch();
  }, [searchMovie, selectedGenre]);

  const handleSearch = (query, genre) => {
    setSearchParams({ query, genre });
  };
  return (
    <>
      {isLoading && <Loader />}
      <SearchMovie
        onSearch={handleSearch}
        genre={genres.genres}
        localGenre={localGenre}
        setLocalGenre={setLocalGenre}
      />
      <MovieList items={results} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
export default MoviesPage;
