import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moviesAction} from "../../Redux/slices/films.slice";

import './header_module.css'
import {genresAction} from "../../Redux/slices/genres.slice";

const Header = () => {

    const dispatch = useDispatch();

    const handler = () => {
        dispatch(moviesAction.GET_Movies())
        dispatch(genresAction.setGenre(null))
    }

    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div className="project_name" onClick={() => handler()}>OWU TMBD TASK</div>
            </Link>
            SWITCHER
            <UserInfo/>
        </div>
    );
};

export default Header;