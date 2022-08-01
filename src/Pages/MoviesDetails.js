import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {tmdbService} from "../Services/tmdb.service";

const MoviesDetails = () => {

    const {pathname:id} = useLocation()
    console.log(id)

    const [movie, setMovie] = useState({})

    useEffect(()=>{
        setMovie(tmdbService.getMovie(id))
    }, [id])

    console.log(movie)

    return (
        <div>
            MoviesDetails
        </div>
    );
};

export default MoviesDetails;