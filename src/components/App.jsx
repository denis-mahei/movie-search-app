import { Suspense, lazy } from 'react';
import { Navigation } from './Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import css from './App.module.scss';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'));
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage.jsx'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast.jsx'));
const MovieReview = lazy(() => import('./MovieReviews/MovieReviews.jsx'));

const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
