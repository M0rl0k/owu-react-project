import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moviesAction} from "../../Redux/slices/films.slice";

import './header_module.css'
import {genresAction} from "../../Redux/slices/genres.slice";
import Switcher from "../ThemeSwitcher/Switcher";

const Header = () => {

    const dispatch = useDispatch();

    const handler = () => {
        dispatch(moviesAction.GET_Movies())
        dispatch(genresAction.setGenre(null))
    }

    return (
        <div className={'header'}>
            <UserInfo/>
            <Link to={'/'}>
                <div className="project_name" onClick={() => handler()}>Home Page</div>
            </Link>
            <Switcher/>
        </div>
    );
};

export default Header;