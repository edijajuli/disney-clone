import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "959de7df0abe70dd2b95b092cb1bfe06";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";
// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKey
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
