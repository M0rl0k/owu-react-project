import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {tmdbService} from "../../Services/tmdb.service";

let initialState = {
    genres: [],
};

const GET_Genres = createAsyncThunk(
    'genresSlice/GET_Genres',
    async (_) => {
        const {data} =  await tmdbService.getGenres()
        return data
    }
);


const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(GET_Genres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
    }
});

const {reducer:GenresReducer} = genresSlice

const genresAction = {
    GET_Genres
}

export {GenresReducer, genresAction}
