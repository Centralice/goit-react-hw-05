import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../services/api";

const MovieReviews = () => {
  const params = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    try {
      const getReviews = async () => {
        const feedback = await fetchReviews(params.movieID);
        setReviews(feedback);
      };
      getReviews();
    } catch (error) {
      console.log("ERROR");
    }
  }, [params.movieID]);

  if (reviews.data.results) {
    return (
      <ul>
        {reviews.data.results.map((review) => (
          <li>
            <p>{review.author}</p>

            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default MovieReviews;
