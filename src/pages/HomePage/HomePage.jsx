import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1>Now Trending</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
