import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
import { fetchByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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
    searchParams.set("query", query);
    setSearchParams(searchParams);
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
