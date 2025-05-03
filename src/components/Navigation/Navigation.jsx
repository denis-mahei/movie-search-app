import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const headerLinkState = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <header className={css.header}>
      <img src="/tmdb_logo.svg" alt="tmdb-logo" width="130" height="45" />
      <nav>
        <NavLink to="/" className={headerLinkState}>
          Home
        </NavLink>
        <NavLink to="/movies" className={headerLinkState}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
