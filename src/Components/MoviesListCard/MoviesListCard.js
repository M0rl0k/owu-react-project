import React from 'react';
import {posterURL} from "../../Consts";
import {Link} from "react-router-dom";

import './MovieCardModule.css'
import {Rating} from "react-simple-star-rating";


const MoviesListCard = ({movie}) => {
        const {id,
            original_title,
            popularity,
            poster_path,
            release_date,
            vote_average,
            vote_count
        } = movie;

    return (
        <div className={'movie_card'}>
            <Link to={`/${id}`} state={movie}>
                <img src={`${posterURL+poster_path}`} alt={`${original_title}`}/>
                <div className={'details'}>
                    <h3>{original_title}</h3>
                    <p>Release Date: {release_date}</p>
                    <p>Popularity: {Math.round(popularity)}</p>
                    <p>Votes: {vote_count}</p>
                </div>
                <Rating
                    iconsCount={10}
                    initialValue={vote_average}
                />
            </Link>
        </div>
    );
};

export default MoviesListCard;