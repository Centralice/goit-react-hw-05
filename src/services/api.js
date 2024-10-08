import axios from "axios";

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU1ODViYmIwZDVhZjY3N2QwOGNkZjM1MzhiODRkMiIsIm5iZiI6MTcyMzI4MjMwNi40Njk3OTUsInN1YiI6IjY2YjYyYmVjOTRkZjU4ZWM1OGQ3Yzk1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPC4QptjjPLoXSMNAUiGF0jlgIs5rjVOplkRbPaqytM",
    },
  };
  const trendingMoviesResponse = await axios.get(url, options);
  return trendingMoviesResponse;
};

export const fetchMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU1ODViYmIwZDVhZjY3N2QwOGNkZjM1MzhiODRkMiIsIm5iZiI6MTcyMzI4MjMwNi40Njk3OTUsInN1YiI6IjY2YjYyYmVjOTRkZjU4ZWM1OGQ3Yzk1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPC4QptjjPLoXSMNAUiGF0jlgIs5rjVOplkRbPaqytM",
    },
  };
  const movieResponse = await axios.get(url, options);
  return movieResponse;
};

export const fetchCast = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU1ODViYmIwZDVhZjY3N2QwOGNkZjM1MzhiODRkMiIsIm5iZiI6MTcyMzI4MjMwNi40Njk3OTUsInN1YiI6IjY2YjYyYmVjOTRkZjU4ZWM1OGQ3Yzk1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPC4QptjjPLoXSMNAUiGF0jlgIs5rjVOplkRbPaqytM",
    },
  };
  const castResponse = await axios.get(url, options);
  return castResponse;
};

export const fetchReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU1ODViYmIwZDVhZjY3N2QwOGNkZjM1MzhiODRkMiIsIm5iZiI6MTcyMzI4MjMwNi40Njk3OTUsInN1YiI6IjY2YjYyYmVjOTRkZjU4ZWM1OGQ3Yzk1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPC4QptjjPLoXSMNAUiGF0jlgIs5rjVOplkRbPaqytM",
    },
  };
  const reviewsResponse = await axios.get(url, options);
  return reviewsResponse;
};

export const fetchByQuery = async (query) => {
  
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU1ODViYmIwZDVhZjY3N2QwOGNkZjM1MzhiODRkMiIsIm5iZiI6MTcyMzI4MjMwNi40Njk3OTUsInN1YiI6IjY2YjYyYmVjOTRkZjU4ZWM1OGQ3Yzk1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPC4QptjjPLoXSMNAUiGF0jlgIs5rjVOplkRbPaqytM",
    },
  };
  const queryResponse = await axios.get(url, options);
  return queryResponse;
};
