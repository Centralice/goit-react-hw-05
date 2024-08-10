import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ trendingMovies }) => {
  
  return (
    <ul className={s.gallery}>
      {trendingMovies.map((movie) => (
        <li key={movie.id}><h2 className={s.movieTitle}>{movie.title}</h2><img className={s.movieCard} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
} alt={movie.title} /></li>
      ))}
    </ul>
  );
};

export default MovieList;
