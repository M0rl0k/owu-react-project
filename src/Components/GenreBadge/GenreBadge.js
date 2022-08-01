import React from 'react';
import {useSelector} from "react-redux";
import './GenreModule.css'

const GenreBadge = () => {

    const genresList = useSelector(state => state.genres.genres)

    return (
        genresList.map(genre =>
            <div className={'genreBadge'} key={genre.id}>
                {genre.name}
            </div> )
    );
};

export default GenreBadge;