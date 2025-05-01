import { Suspense, lazy } from 'react';
import css from './App.module.css';
import { Navigation } from './Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import MoviesCast from './MovieCast/MoviesCast.jsx';
import MovieReview from './MovieReview/MovieReview.jsx';
// import NotFoundPage from '../pages/NotFoundPage.jsx';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'));
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage.jsx'));

const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
