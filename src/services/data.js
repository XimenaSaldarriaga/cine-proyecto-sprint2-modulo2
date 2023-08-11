import axios from "axios";
export const URL_API = "https://api.themoviedb.org/3/movie/now_playing";
export const API_KEY = "b6ff26606e3f84d993c7c227a88679a8";
export const URL_CONSULTA = `${URL_API}?api_key=${API_KEY}&language=es-ES`;
export const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
export const URL_THEATERS = "https://back-cine.onrender.com/theaters";
export const API_URL = "https://api.themoviedb.org/3";
export const URL_USERS = "https://back-cine.onrender.com/users"


export const getDataMovies = async () => {
  try {
    const { data } = await axios.get(URL_CONSULTA);
    const movies = data.results;
    
    const genresResponse = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`);
    const genresData = genresResponse.data.genres;
    
    movies.forEach((movie) => {
      const movieGenres = movie.genre_ids.map((genreId) => {
        const genre = genresData.find((genre) => genre.id === genreId);
        return genre ? genre.name : "Unknown";
      });
      movie.genres = movieGenres;
    });

        const movieDataPromises = movies.map(async (movie) => {
            const response = await axios.get(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}&language=es-ES`);
            return response.data;
          });
      
          const movieDataList = await Promise.all(movieDataPromises);
      
          movies.forEach((movie, index) => {
            movie.duration = movieDataList[index].runtime;
          });

    return movies;
  } catch (error) {
    return error;
  }
};
















