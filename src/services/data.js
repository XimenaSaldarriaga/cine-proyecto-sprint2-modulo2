import axios from "axios";

const URL_API = "https://api.themoviedb.org/3/movie/now_playing"
const API_KEY = "b6ff26606e3f84d993c7c227a88679a8"
const URL_IMAGE = "https://image.tmdb.org/t/p/original"
const URL_CONSULTA = `${URL_API}?api_key=${API_KEY}&language=es-ES`
const URL_GENDER = "https://developer.themoviedb.org/reference/genre-movie-list"

export const getDataMovies = async () => {
    try {
        const {data} = 
        await axios.get(URL_CONSULTA);
        return data.results
    } catch (error) {
        return error
    }
}













