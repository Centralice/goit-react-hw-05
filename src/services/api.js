import axios from "axios";

export const fetchTrendingMovies = async () => {
  const trendingMoviesResponse = await axios.get("");
  console.log(trendingMoviesResponse);
  return trendingMoviesResponse;
};
