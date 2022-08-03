import {genreURL, moviesURL} from "../Consts";
import {axiosService} from "./axios.service";

const tmdbService = {
    getGenres: () => axiosService.get(`${genreURL}`),
    getMovies: () => axiosService.get(`${moviesURL}`),
    getMoviesPage: (page, genre) => axiosService.get(`/discover/movie?&page=${page}&with_genres=${genre}`),
    getMoviesByGenre: (id) => axiosService.get(`${moviesURL}?with_genres=${id}`)
}

export {tmdbService}