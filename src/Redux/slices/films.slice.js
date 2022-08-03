import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tmdbService} from "../../Services/tmdb.service";

let initialState = {
    movies: [],
    requestInfo: {},
    page:1,
    totalPages:null
};


const GET_Movies = createAsyncThunk(
    'moviesSlice/GET_Movies',
    async (_) => {
        const {data} = await tmdbService.getMovies()
        return data
    }
);

const GET_MoviesByGenre =  createAsyncThunk(
    'moviesSlice/GET_MoviesByGenre',
    async (id) => {
        const {data} = await tmdbService.getMoviesByGenre(id)
        return data
    }
);

const GET_MoviesByPage = createAsyncThunk(
    'moviesSlice/GET_MoviesByPage',
    async ([page,genre]) => {
        const {data} = await tmdbService.getMoviesPage(page, genre)
        console.log(data)
        return data
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        addPage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GET_Movies.fulfilled, (state, action) => {
                state.requestInfo = action.payload
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
            })
            .addCase(GET_MoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
            })
            .addCase(GET_MoviesByPage.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
            })
    }
});

const {reducer: MoviesReducer, actions:{addPage}} = moviesSlice

const moviesAction = {
    GET_Movies,
    GET_MoviesByGenre,
    GET_MoviesByPage,
    addPage
}

export {MoviesReducer, moviesAction}
