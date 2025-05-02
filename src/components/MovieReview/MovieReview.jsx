import { fetchData } from '../../tmdb-api.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../Reviews/Reviews.jsx';
import { HashLoader } from 'react-spinners';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetchData(`/movie/${movieId}/reviews`);
        setReviews(response.results);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);
  // <HashLoader color="#0ab9e0" />
  return (
    <>
      {isLoading ? (
        <HashLoader color="#0ab9e0" />
      ) : reviews.length > 0 ? (
        <Reviews items={reviews} />
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
          Hmm… Looks like everyone’s too shy to leave a review!
        </p>
      )}
    </>
  );
};
export default MovieReview;
