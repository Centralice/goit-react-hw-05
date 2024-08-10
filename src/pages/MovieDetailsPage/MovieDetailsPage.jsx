import s from "./MovieDetailsPage.module.css";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../services/api";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const params = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    try {
      const getMovie = async () => {
        const searchedMovie = await fetchMovie(params.movieID);
        setMovie(searchedMovie);
      };
      getMovie();
    } catch (error) {
      console.log("ERROR");
    }
  }, [params.movieID]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{movie.data.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.data.backdrop_path}`}
        alt={movie.data.title}
      />
      <MovieCast />
      <MovieReviews />
    </div>
  );
};

export default MovieDetailsPage;
