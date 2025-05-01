import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ items }) => {
  return (
    <ul className={css.container}>
      {items.map((item) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

        return (
          <li key={item.id} className={css.movieCard}>
            <Link to={`/movies/${item.id}`}>
              <img src={imageUrl} alt={item.title} width="180" height="250" />
              <h2 className={css.title}>{item.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
