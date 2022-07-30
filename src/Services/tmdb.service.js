import {genreURL, moviesURL} from "../Consts";
import {axiosService} from "./axios.service";

const tmdbService = {
     getGenres: () => axiosService.get(`${genreURL}`),
     getMovies: () => axiosService.get(`${moviesURL}`)
}

export {tmdbService}