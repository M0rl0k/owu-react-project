import React from 'react';
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useSelector} from "react-redux";

import './MovieListModule.css'



const MoviesList = () => {

    const moviesList = useSelector(state => state.movies.movies)

    return (
        <div className={'movies_list'}>
            {moviesList.map(movie =><MoviesListCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesList;