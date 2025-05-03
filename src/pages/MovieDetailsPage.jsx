import { fetchData } from '../tmdb-api.js';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import GoBack from '../components/GoBack/GoBack.jsx';
import Details from '../components/Details/Details.jsx';
import MovieMainInfo from '../components/MovieMainInfo/MovieMainInfo.jsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function getDetail() {
      try {
        const data = await fetchData(`/movie/${movieId}`);
        setMovie(data);
      } catch (e) {
        toast.error('Oops! Something went wrong!');
      }
    }

    getDetail();
  }, [movieId]);

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
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
