import React, {useState} from 'react';
import {Rating} from "react-simple-star-rating";
import {useSelector} from "react-redux";

import './InfoModule.css'

const MovieInfo = ({movie}) => {

    const genres = useSelector(state => state.genres.genres)

    const {id,
        original_title,
        genre_ids,
        popularity,
        release_date,
        vote_average,
        vote_count,
        overview
    } = movie

    let currentGenres = [];

   const filter = () => genres.forEach(genre => {
       for (let i = 0; i < genres.length; i++) {
           if (genre.id === genre_ids[i]) {
               currentGenres.push(genre)
       }
        }
    })

    filter()

    const [rating, setRating] = useState(vote_average)

    const handleRating = (rate) => {
        setRating(rate)
    };
    return (
        <div className={'movie_info'}>
            <p>ID: {id}</p>
            <h2>{original_title}</h2>
            <div className={'card-genres'}>
                Genres: {currentGenres.map(genre => <div className={'small_badge'} key={genre.id}>{genre.name}</div> )}
            </div>
            <h5>Release Date: {release_date}</h5>
            <span>{overview}</span>
            <p>Popularity: {Math.round(popularity)}</p>
            <Rating onClick={handleRating}
                    className={'stars'}
                    iconsCount={10}
                    initialValue={rating}
            />
            <p>Total Votes: {vote_count}</p>
        </div>
    );
};

export default MovieInfo;