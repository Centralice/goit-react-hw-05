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
        setTrendingMovies(movies);
      };
      getTrendingMovies();
    } catch (error) {
      console.log("ERROR");
    }
  }, []);

  return (
    <div>
      <h1>Now Trending</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
