import './App.css';

import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {genresAction} from "./Redux/slices/genres.slice";
import {moviesAction} from "./Redux/slices/films.slice";

import Header from "./Components/Header/Header";
import MoviesPage from "./Pages/MoviesPage";
import MoviesDetails from "./Pages/MoviesDetails";
import Footer from "./Components/Footer/Footer";
import GenreBadge from "./Components/GenreBadge/GenreBadge";

function App() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresAction.GET_Genres());
        dispatch(moviesAction.GET_Movies());
    }, [dispatch])


    // console.log(genresList)
    // console.log(moviesList)
    return (
        <div className="wrap">
            <div className="top_wrapper">
                <div className={'nav'}>
                    <Header/>
                </div>
                <div className="genres_list">
                    <GenreBadge/>
                </div>
            </div>
            <div className={'contentBox'}>
                <br/>
                <br/>
                <br/>
                <Routes>
                    <Route path={'/'} element={<MoviesPage/>}/>
                    <Route path={'/:id'} element={<MoviesDetails/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
