import React from 'react';
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {Link} from "react-router-dom";

const MoviesList = () => {
    return (
        <div>
            <Link to={'/:id'}><MoviesListCard/></Link>
        </div>
    );
};

export default MoviesList;