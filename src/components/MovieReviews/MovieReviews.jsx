import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../services/api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieID } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const feedback = await fetchReviews(movieID);
        setReviews(feedback.data.results || []);
      } catch (error) {
        console.log("ERROR");
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieID]);

  if (isLoading) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return <h2>No reviews yet...</h2>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>
            <strong>{review.author}</strong>
          </p>

          <p>
            <i>{review.content}</i>
          </p>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
