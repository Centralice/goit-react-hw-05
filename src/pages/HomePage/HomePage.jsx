import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies.data.results);
      };
      getTrendingMovies();
    } catch (error) {
      console.log("ERROR");
    }
  }, []);
  
  return (
    <div>
      <h1 className={s.pageTitle}>Now Trending</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
