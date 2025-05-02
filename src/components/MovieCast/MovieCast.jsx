import { fetchData } from '../../tmdb-api.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const response = await fetchData(`/movie/${movieId}/credits`);
      setCast(response.cast);
    }

    getCast();
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map((item) => (
        <li key={item.id} className={css.castItem}>
          <img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : 'https://placehold.co/100x150?text=No+Image'
            }
            alt=""
            width="100"
            height="150"
          />

          <h4>{item.name}</h4>
          <p className={css.char}>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieCast;
