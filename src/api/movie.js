const apiKey = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fungsi umum untuk fetch
const fetchData = (endpoint, params = "") => {
  const separator = endpoint.includes("?") ? "&" : "?";
  return fetch(
    `${BASE_URL}${endpoint}${separator}api_key=${apiKey}&language=en-US${params}`
  );
};

// Get popular movies
export const getPopularMovie = (page = 1) => {
  return fetchData(`/movie/top_rated`, `&page=${page}`);
};

// Get upcoming movies
export const getUpcomingMovie = () => {
  return fetchData(`/movie/upcoming`, `&page=1`);
};

// Get movie genres
export const getGenre = () => {
  return fetchData(`/genre/movie/list`);
};

// Get movie detail
export const getDetailsMovie = (id) => {
  return fetchData(`/movie/${id}`);
};
