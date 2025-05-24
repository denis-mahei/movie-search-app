import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.scss';

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={css.container}>
      {items.map((item) => {
        const poster = item.poster_path
          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : 'https://placehold.co/100x150?text=No+Image';
        return (
          <li key={item.id} className={css.movieCard}>
            <Link to={`/movies/${item.id}`} state={location}>
              <img src={poster} alt={item.title} width="180" height="250" />
              <h2 className={css.title}>{item.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
