import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {GenresReducer} from "./slices/genres.slice";
import {MoviesReducer} from "./slices/films.slice";

const rootReducer = combineReducers({
    genres: GenresReducer,
    movies: MoviesReducer
});

const setupStore = configureStore({
    reducer: rootReducer
});

export {
    setupStore
}