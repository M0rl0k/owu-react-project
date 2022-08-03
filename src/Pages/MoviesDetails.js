import React from 'react';
import {useLocation} from "react-router-dom";
import {posterURL} from "../Consts";
import MovieInfo from "../Components/MovieInfo/MovieInfo";

import './MoviesDetailsModule.css'


const MoviesDetails = () => {

    const history = useLocation()
    const movie = history.state
    const {
        original_title,
        poster_path,
    } = movie

    return (
        <div className={'movie_details_card'}>
            <div className={'image_box'}>
                <img src={`${posterURL + poster_path}`} alt={`${original_title}`}/>
            </div>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MoviesDetails;