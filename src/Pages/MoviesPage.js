import React from 'react';
import MoviesList from "../Components/MoviesList/MoviesList";
import {useDispatch, useSelector} from "react-redux";
import {moviesAction} from "../Redux/slices/films.slice";

import './MoviesPageModule.css'


const MoviesPage = () => {

    const totalPages = useSelector(state => state.movies.totalPages)
    const currentPage = useSelector(state => state.movies.page)
    const genreId = useSelector(state => state.genres.selectedGenre)

    const dispatch = useDispatch();

    const toFirstPage = (page, genre) =>{
        console.log(page)
        dispatch(moviesAction.addPage(page))
        dispatch(moviesAction.GET_MoviesByPage([page, genre]));
    }

    const toNextPage = (page, genre) => {
        console.log(page)
        dispatch(moviesAction.addPage(page))
        dispatch(moviesAction.GET_MoviesByPage([page, genre]))
    }

    const toPrewPage = (page, genre) => {
        dispatch(moviesAction.addPage(page))
        dispatch(moviesAction.GET_MoviesByPage([page, genre]))
    }

    return (
        <div className={'list_wrapper'}>
            <MoviesList/>
            <div className={'pagination'}>
                <p>Page {currentPage} of {totalPages}</p>
                <button onClick={()=> toFirstPage(1, genreId)}>First Page</button>
                <button onClick={()=> toNextPage(currentPage+1, genreId)}>Next Page</button>
                <button onClick={()=> toPrewPage(currentPage-1, genreId)}>Prew Page</button>
            </div>
        </div>
    );
};

export default MoviesPage;