import axios from "axios";

export const URL_API = "https://api.themoviedb.org/3/movie/now_playing"
export const API_KEY = "b6ff26606e3f84d993c7c227a88679a8"
export const URL_CONSULTA = `${URL_API}?api_key=${API_KEY}&language=es-ES`
export const URL_IMAGE = "https://image.tmdb.org/t/p/original/"
export const URL_THEATERS = "http://localhost:3000/theaters"
export const URL_GENDERS = "http://localhost:3000/gender"


export const getDataMovies = async () => {
    try {
        const {data} = 
        await axios.get(URL_CONSULTA);
        return data.results
    } catch (error) {
        return error
    }
}


















