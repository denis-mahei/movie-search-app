import css from './MovieMainInfo.module.css';
import { parseISO, format } from 'date-fns';

const MovieMainInfo = ({ movie }) => {
  return (
    <div className={css.main}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
        height="450"
      />
      <div className={css.border}>
        <h2 className={css.title}>
          {movie.title} ({format(parseISO(movie.release_date), 'yyyy')})
        </h2>
        <h3 className={css.overview}>Overview</h3>
        <p className={css.text}>{movie.overview}</p>
        <h3 className={css.overview}>Genres</h3>
        <ul className={css.genresList}>
          {movie.genres.map((item) => (
            <li key={item.id} className={css.genresItem}>
              <p>{item.name}</p>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default MovieMainInfo;
