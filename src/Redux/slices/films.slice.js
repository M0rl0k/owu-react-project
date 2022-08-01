import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {tmdbService} from "../../Services/tmdb.service";

let initialState = {
    movies: [],
};

const GET_Movies = createAsyncThunk(
    'moviesSlice/GET_Movies',
    async (_) => {
        const {data:{results}} =  await tmdbService.getMovies()
        console.log(results)
        return results
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(GET_Movies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
    }
});

const {reducer:MoviesReducer} = moviesSlice

const moviesAction = {
    GET_Movies
}

export {MoviesReducer, moviesAction}
