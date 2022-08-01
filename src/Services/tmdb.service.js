import {genreURL, moviesURL} from "../Consts";
import {axiosPostersService, axiosService} from "./axios.service";

const tmdbService = {
     getGenres: () => axiosService.get(`${genreURL}`),
     getMovies: () => axiosService.get(`${moviesURL}`),
     getPoster: (posterURL) => axiosPostersService.get(posterURL),
     getMovie: (id) => axiosService.get(`/movies${id}`)
}

export {tmdbService}