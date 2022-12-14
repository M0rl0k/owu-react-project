import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './GenreModule.css'
import {moviesAction} from "../../Redux/slices/films.slice";
import {genresAction} from "../../Redux/slices/genres.slice";
import {Link} from "react-router-dom";

const GenreBadge = () => {

    const genresList = useSelector(state => state.genres.genres)

    const dispatch = useDispatch();

    const handleClick = (genre) =>{
        dispatch(moviesAction.GET_MoviesByGenre(genre.id));
        dispatch(genresAction.setGenre(genre.id));
    }

    return (
        genresList.map(genre => <Link to={'/'} key={genre.id}>
            <button className={'genreBadge'}
                    onClick={()=> handleClick(genre)}>
                {genre.name}
            </button>
        </Link>
     )
);
};

export default GenreBadge;