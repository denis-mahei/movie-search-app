import css from './SearchMovie.module.css';

const SearchMovie = () => {
  return (
    <form className={css.form}>
      <input
        type="text"
        name="search"
        autoFocus
        autoComplete="off"
        className={css.field}
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};
export default SearchMovie;
