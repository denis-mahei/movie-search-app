import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../tmdb-api.js';
import { useEffect, useState } from 'react';
import MoviesCast from '../components/MovieCast/MoviesCast.jsx';

const MovieDetailsPage = () => {
  const [isActive, setIsActive] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getDetail() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    }

    getDetail();
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="review">Review</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MovieDetailsPage;
