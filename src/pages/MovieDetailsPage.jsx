import { fetchData } from '@srv/tmdb-api.js';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import GoBack from '@/GoBack/GoBack.jsx';
import Details from '@/Details/Details.jsx';
import MovieMainInfo from '@/MovieMainInfo/MovieMainInfo.jsx';
import Loader from '@/Loader/Loader.jsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function getDetail() {
      try {
        setIsLoading(true);
        const data = await fetchData(`/movie/${movieId}`);
        setMovie(data);
      } catch (e) {
        toast.error('Oops! Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    }

    getDetail();
  }, [movieId]);

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      {isLoading && <Loader />}
      {movie && (
        <>
          <GoBack to={goBackLink.current}>Go back</GoBack>
          <MovieMainInfo movie={movie} />
          <Details>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="review">Review</Link>
            </li>
          </Details>
        </>
      )}

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetailsPage;
