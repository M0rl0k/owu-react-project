import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MoviesPage from "./Pages/MoviesPage";
import MoviesDetails from "./Pages/MoviesDetails";
import Footer from "./Components/Footer/Footer";
import GenreBadge from "./Components/GenreBadge/GenreBadge";

function App() {

    return (
        <div className="wrap">
            <div className={'nav'}>
                <Header/>
            </div>
            <div className="genres_list">
                <GenreBadge/>
            </div>
            <div className={'contentBox'}>
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
