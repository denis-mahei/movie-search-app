import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchData } from '../tmdb-api.js';
import { Suspense, useEffect, useState } from 'react';
import GoBack from '../components/GoBack/GoBack.jsx';
import Details from '../components/Details/Details.jsx';
import MovieMainInfo from '../components/MovieMainInfo/MovieMainInfo.jsx';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = location.state ?? '/';

  useEffect(() => {
    async function getDetail() {
      try {
        const data = await fetchData(`/movie/${movieId}`);
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    }

    getDetail();
  }, [movieId]);

  return (
    <main>
      {movie && (
        <>
          <GoBack to={goBackLink}>Go back</GoBack>
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

      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetailsPage;
