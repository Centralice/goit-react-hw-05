import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
import { fetchByQuery } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    let response;
    try {
      response = await fetchByQuery(query);
    } catch (error) {
      console.log("ERROR");
    }
    e.target.reset();
    setMovies(response.data.results);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" type="search" placeholder="Search a movie..." />
        <button>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
