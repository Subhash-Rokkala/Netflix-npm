const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "YOUR_TMDB_API_KEY";

// Fetch genres
export const fetchGenres = () =>
  fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(res => res.json());

// Fetch popular movies
export const fetchPopular = () =>
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then(res => res.json());
