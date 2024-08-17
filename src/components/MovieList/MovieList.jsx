import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const fromHome = location.pathname === "/";
  return (
    <ul className={s.gallery}>
      {movies.map((movie) => (
        <Link
          to={fromHome ? `movies/${movie.id.toString()}` : movie.id.toString()}
          state={location}
          key={movie.id}
        >
          <h2 className={s.movieTitle}>{movie.title}</h2>
          <img
            className={s.movieCard}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;


