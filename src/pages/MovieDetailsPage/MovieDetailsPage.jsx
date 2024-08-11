import s from "./MovieDetailsPage.module.css";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovie } from "../../services/api";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const params = useParams();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

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
    <div className={s.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.data.backdrop_path}`}
        alt={movie.data.title}
      />
      <div>
        <h1>{movie.data.title}</h1>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.data.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Original language:</strong> {movie.data.original_language}
        </p>
        <p>
          <strong>Tagline:</strong> "{movie.data.tagline}"
        </p>
        <p>
          <strong>Release date:</strong> {movie.data.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.data.runtime} min
        </p>
        <p>
          <strong>Production:</strong>{" "}
          {movie.data.production_companies
            .map((company) => company.name)
            .join(", ")}
        </p>
        <p>
          <strong>Country:</strong>{" "}
          {movie.data.production_countries
            .map((country) => country.name)
            .join(", ")}
        </p>
        <span className={s.before}></span>{" "}
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <span className={s.between}></span>{" "}
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
